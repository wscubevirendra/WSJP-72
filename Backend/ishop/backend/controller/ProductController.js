const { generateUniqueImageName } = require("../helper");
const ProductModel = require("../model/ProductModel");
const CategoryModel = require("../model/CategoryModel");


class ProductController {

    create(data, thumbnail) {
        return new Promise(
            (resolve, reject) => {
                try {
                    if (!data.name || !data.slug || !thumbnail) {
                        reject(
                            {
                                msg: "All Field required",
                                status: 0
                            }

                        )
                        return
                    }
                    const imageName = generateUniqueImageName(thumbnail.name)
                    const destination = "./public/images/product/" + imageName;
                    thumbnail.mv(
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
                                const product = new ProductModel({
                                    ...data,
                                    colors: JSON.parse(data.colors),
                                    thumbnail: imageName
                                })

                                product.save().then(
                                    () => {
                                        resolve(
                                            {
                                                msg: "Product created",
                                                status: 1
                                            }
                                        )

                                    }
                                ).catch(
                                    () => {
                                        resolve(
                                            {
                                                msg: "Unable to create product",
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

    get(productId, query) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    let products = null;
                    const filterQuery = {};
                    // const limit=Number(query.limit) || 10
                    if (query.categorySlug && query.categorySlug != "null") {
                        const category = await CategoryModel.findOne({ slug: query.categorySlug });
                        filterQuery["categoryId"] = category._id;
                        console.log(category)
                    }

                    if (query.productColor && query.productColor != "null") {
                        filterQuery["colors"] = query.productColor;

                    }



                    if (productId) {
                        products = await ProductModel.findById(productId).populate(["categoryId", "colors"]);
                    } else {
                        products = await ProductModel.find(filterQuery).populate(["categoryId", "colors"]).limit(query.limit);


                    }

                    if (products) {
                        resolve(
                            {
                                msg: "Product found",
                                status: 1,
                                products
                            }
                        )

                    } else {
                        reject(
                            {
                                msg: "Unable to find Product",
                                status: 0
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

    status(id, flag) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    const product = await ProductModel.findById(id);

                    if (product) {
                        const productStatus = {};


                        if (flag == 1) {
                            productStatus.status = !product.status
                        } else if (flag == 2) {
                            productStatus.stock = !product.stock

                        } else if (flag == 3) {
                            productStatus.topSelling = !product.topSelling


                        }
                        ProductModel.updateOne(
                            { _id: id },
                            {
                                $set: productStatus
                            }
                        ).then(
                            () => {
                                resolve(
                                    {
                                        msg: "Product status update",
                                        status: 1
                                    }
                                )
                            }
                        ).catch(
                            () => {
                                reject(
                                    {
                                        msg: "Unable to update Product status ",
                                        status: 0
                                    }

                                )
                            }
                        )

                    } else {
                        reject(
                            {
                                msg: "Product id not found"
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

    multipleImage(id, allImages) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    const product = await ProductModel.findById(id);

                    if (product) {
                        const currentImages = product.images ?? [];
                        const allPromise = [];

                        for (let image of allImages) {
                            const imageName = generateUniqueImageName(image.name);
                            currentImages.push(imageName);
                            const destination = "./public/images/product/" + imageName
                            allPromise.push(image.mv(destination))


                        }
                        await Promise.all(allPromise);
                        ProductModel.updateOne(
                            { _id: id },
                            {
                                $set: {
                                    images: currentImages
                                }
                            }
                        ).then(
                            () => {
                                resolve(
                                    {
                                        msg: "Product images add",
                                        status: 1
                                    }
                                )
                            }
                        ).catch(
                            () => {
                                reject(
                                    {
                                        msg: "Unable to add Product images ",
                                        status: 0
                                    }

                                )
                            }
                        )

                    } else {
                        reject(
                            {
                                msg: "Product id not found"
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

module.exports = ProductController