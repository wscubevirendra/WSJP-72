const ColorModel = require("../model/ColorModel")

class ColorController {
    create(data) {
        return new Promise(
            (resolve, reject) => {

                try {
                    if (!data.colorName || !data.colorCode) {
                        reject(
                            {
                                msg: "All Field required",
                                status: 0
                            }

                        )
                        return;
                    } else {
                        const color = new ColorModel(
                            {
                                colorName: data.colorName,
                                colorCode: data.colorCode
                            }
                        )
                        color.save().then(
                            (success) => {
                                resolve(
                                    {
                                        msg: "Color is Added",
                                        status: 1
                                    }
                                )
                            }
                        ).catch(
                            (error) => {
                                console.log(error);
                                reject(
                                    {
                                        msg: "Color is not Added",
                                        status: 0
                                    }
                                )
                            }
                        )
                    }

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
    get(colorId) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    let colors = null;
                    if (colorId) {
                        colors = await ColorModel.findById(colorId);
                    } else {
                        colors = await ColorModel.find();
                    }

                    if (colors) {
                        resolve(
                            {
                                msg: "Colors found",
                                status: 1,
                                colors
                            }
                        )

                    } else {
                        reject(
                            {
                                msg: "Unable to find Colors",
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

    // status(id) {
    //     return new Promise(
    //         async (resolve, reject) => {
    //             try {
    //                 const category = await CategoryModel.findById(id);
    //                 if (category) {
    //                     CategoryModel.updateOne(
    //                         { _id: id },
    //                         {
    //                             $set: {
    //                                 status: !category.status
    //                             }
    //                         }
    //                     ).then(
    //                         () => {
    //                             resolve(
    //                                 {
    //                                     msg: "Category status update",
    //                                     status: 1
    //                                 }
    //                             )
    //                         }
    //                     ).catch(
    //                         () => {
    //                             reject(
    //                                 {
    //                                     msg: "Unable to update category status ",
    //                                     status: 0
    //                                 }

    //                             )
    //                         }
    //                     )

    //                 } else {
    //                     reject(
    //                         {
    //                             msg: "Category id not found"
    //                         }
    //                     )

    //                 }


    //             } catch (error) {
    //                 reject({
    //                     msg: "Internal server error",
    //                     status: 0
    //                 })

    //             }

    //         }
    //     )

    // }

    // delete(id) {
    //     return new Promise(
    //         async (resolve, reject) => {
    //             try {
    //                 const category = await CategoryModel.findById(id);
    //                 CategoryModel.deleteOne({ _id: category.id }).then(
    //                     (success) => {
    //                         resolve(
    //                             {
    //                                 msg: "Category delete Successfully",
    //                                 status: 1
    //                             }
    //                         )
    //                     }
    //                 ).catch(
    //                     (error) => {
    //                         reject(
    //                             {
    //                                 msg: "Category not deleted",
    //                                 status: 0
    //                             }
    //                         )
    //                     }
    //                 )
    //             } catch (error) {
    //                 reject({
    //                     msg: "Internal server error",
    //                     status: 0
    //                 })
    //             }

    //         }
    //     )

    // }

    // update(data, id, categoryImage) {
    //     return new Promise(
    //         (resolve, reject) => {
    //             try {
    //                 if (categoryImage) {

    //                     const imageName = generateUniqueImageName(categoryImage.name)
    //                     const destination = "./public/images/category/" + imageName

    //                     categoryImage.mv(
    //                         destination,
    //                         (error) => {
    //                             if (error) {
    //                                 reject(
    //                                     {
    //                                         msg: "Category not update",
    //                                         status: 0
    //                                     }
    //                                 )
    //                             } else {
    //                                 CategoryModel.updateOne(
    //                                     { _id: id },
    //                                     {
    //                                         $set: {
    //                                             name: data.name,
    //                                             slug: data.slug,
    //                                             categoryImage: imageName
    //                                         }
    //                                     }
    //                                 ).then(
    //                                     (success) => {
    //                                         resolve(
    //                                             {
    //                                                 msg: "Category update successfully",
    //                                                 status: 1
    //                                             }
    //                                         )
    //                                     }
    //                                 ).catch(
    //                                     (error) => {
    //                                         reject(
    //                                             {
    //                                                 msg: "Category not update",
    //                                                 status: 0
    //                                             }
    //                                         )
    //                                     }
    //                                 )
    //                             }
    //                         }
    //                     )

    //                 } else {
    //                     CategoryModel.updateOne(
    //                         { _id: id },
    //                         {
    //                             $set: {
    //                                 name: data.name,
    //                                 slug: data.slug
    //                             }
    //                         }
    //                     ).then(
    //                         (success) => {
    //                             resolve(
    //                                 {
    //                                     msg: "Category update successfully",
    //                                     status: 1
    //                                 }
    //                             )
    //                         }
    //                     ).catch(
    //                         (error) => {
    //                             reject(
    //                                 {
    //                                     msg: "Category not update",
    //                                     status: 0
    //                                 }
    //                             )
    //                         }
    //                     )
    //                 }
    //             } catch (error) {
    //                 console.log(error);
    //                 reject({
    //                     msg: "Internal server error",
    //                     status: 0
    //                 })
    //             }
    //         }
    //     )

    // }
}

module.exports = ColorController