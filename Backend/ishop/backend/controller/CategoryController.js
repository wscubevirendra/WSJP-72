const generateUniqueImageName = require("../helper")
const CategoryModel = require("../model/CategoryModel")

class CategoryController {
    create(data, categoryImage) {
        return new Promise(
            (resolve, reject) => {
                try {
                    if (!data.name || !data.slug || !categoryImage) {
                        reject(
                            {
                                msg: "All Field required",
                                status: 0
                            }

                        )
                        return
                    }
                    const imageName = generateUniqueImageName(categoryImage.name)
                    const destination = "./public/images/category/" + imageName
                    categoryImage.mv(
                        destination,
                        (err) => {
                            if (err) {
                                reject(
                                    {
                                        msg: "Unable to upload image",
                                        status: 0
                                    }
                                )
                            } else {
                                const category = new CategoryModel({
                                    name: data.name,
                                    slug: data.slug,
                                    categoryImage: imageName
                                })

                                category.save().then(
                                    () => {
                                        resolve(
                                            {
                                                msg: "Category created",
                                                status: 1
                                            }
                                        )

                                    }
                                ).catch(
                                    () => {
                                        resolve(
                                            {
                                                msg: "Unable to create category",
                                                status: 0
                                            }
                                        )
                                    }
                                )

                            }

                        }
                    )
                } catch (error) {
                    console.log(error)
                    reject({
                        msg: "Internal server error",
                        status: 0
                    })

                }

            }
        )

    }
    get(categoryId) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    let categories = null;
                    if (categoryId) {
                        categories = await CategoryModel.findById(categoryId);
                    } else {
                        categories = await CategoryModel.find();
                    }

                    if (categories) {
                        resolve(
                            {
                                msg: "Category found",
                                status: 1,
                                categories
                            }
                        )

                    } else {
                        reject(
                            {
                                msg: "Unable to find category",
                                status: 0
                            }
                        )

                    }


                } catch (error) {
                    reject({
                        msg: "Internal server error",
                        status: 0
                    })

                }

            }
        )

    }

    status(id) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    const category = await CategoryModel.findById(id);
                    if (category) {
                        CategoryModel.updateOne(
                            { _id: id },
                            {
                                $set: {
                                    status: !category.status
                                }
                            }
                        ).then(
                            () => {
                                resolve(
                                    {
                                        msg: "Category status update",
                                        status: 1
                                    }
                                )
                            }
                        ).catch(
                            () => {
                                reject(
                                    {
                                        msg: "Unable to update category status ",
                                        status: 0
                                    }

                                )
                            }
                        )

                    } else {
                        reject(
                            {
                                msg: "Category id not found"
                            }
                        )

                    }


                } catch (error) {
                    reject({
                        msg: "Internal server error",
                        status: 0
                    })

                }

            }
        )

    }

    delete(id) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    const category = await CategoryModel.findById(id);
                    CategoryModel.deleteOne({ _id: category.id }).then(
                        (success) => {
                            resolve(
                                {
                                    msg: "Category delete Successfully",
                                    status: 1
                                }
                            )
                        }
                    ).catch(
                        (error) => {
                            reject(
                                {
                                    msg: "Category not deleted",
                                    status: 0
                                }
                            )
                        }
                    )
                } catch (error) {
                    reject({
                        msg: "Internal server error",
                        status: 0
                    })
                }

            }
        )

    }

    update(data, id, categoryImage) {
        return new Promise(
            (resolve, reject) => {
                try {
                    if (categoryImage) {

                        const imageName = generateUniqueImageName(categoryImage.name)
                        const destination = "./public/images/category/" + imageName

                        categoryImage.mv(
                            destination,
                            (error) => {
                                if (error) {
                                    reject(
                                        {
                                            msg: "Category not update",
                                            status: 0
                                        }
                                    )
                                } else {
                                    CategoryModel.updateOne(
                                        { _id: id },
                                        {
                                            $set: {
                                                name: data.name,
                                                slug: data.slug,
                                                categoryImage: imageName
                                            }
                                        }
                                    ).then(
                                        (success) => {
                                            resolve(
                                                {
                                                    msg: "Category update successfully",
                                                    status: 1
                                                }
                                            )
                                        }
                                    ).catch(
                                        (error) => {
                                            reject(
                                                {
                                                    msg: "Category not update",
                                                    status: 0
                                                }
                                            )
                                        }
                                    )
                                }
                            }
                        )

                    } else {
                        CategoryModel.updateOne(
                            { _id: id },
                            {
                                $set: {
                                    name: data.name,
                                    slug: data.slug
                                }
                            }
                        ).then(
                            (success) => {
                                resolve(
                                    {
                                        msg: "Category update successfully",
                                        status: 1
                                    }
                                )
                            }
                        ).catch(
                            (error) => {
                                reject(
                                    {
                                        msg: "Category not update",
                                        status: 0
                                    }
                                )
                            }
                        )
                    }
                } catch (error) {
                    console.log(error);
                    reject({
                        msg: "Internal server error",
                        status: 0
                    })
                }
            }
        )

    }
}

module.exports = CategoryController