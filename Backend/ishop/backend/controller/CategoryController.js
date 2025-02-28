const CategoryModel = require("../model/CategoryModel")

class CategoryController {
    create(data) {
        return new Promise(
            (resolve, reject) => {
                try {
                    if (!data.name || !data.slug) {
                        reject(
                            {
                                msg: "All Field required",
                                status: 0
                            }

                        )
                        return
                    }
                    const category = new CategoryModel({
                        name: data.name,
                        slug: data.slug,
                        categoryImage: data.categoryImage
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

                } catch (error) {
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
}

module.exports = CategoryController