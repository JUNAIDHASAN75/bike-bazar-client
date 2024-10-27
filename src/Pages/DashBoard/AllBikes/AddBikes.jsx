import axios from "axios";
import { useForm } from "react-hook-form";

const AddBikes = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        try {
            // POST request to server API
            const response = await axios.post("http://localhost:5000/bikes", data);
            console.log("Bike added successfully:", response.data);
            // Reset form after successful submission
            reset();
        } catch (error) {
            console.error("Error adding bike:", error);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto p-4 space-y-4">
                {/* Bike Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Bike Name</span>
                    </label>
                    <input
                        type="text"
                        {...register("name", { required: "Bike name is required" })}
                        className="input input-bordered w-full"
                        placeholder="Enter bike name"
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>

                {/* Price */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="number"
                        {...register("price", { required: "Price is required" })}
                        className="input input-bordered w-full"
                        placeholder="Enter price"
                    />
                    {errors.price && <p className="text-red-500">{errors.price.message}</p>}
                </div>

                {/* Assemble */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Assemble</span>
                    </label>
                    <select
                        {...register("assemble", { required: "Assemble type is required" })}
                        className="select select-bordered w-full"
                    >
                        <option value="">Select Assemble Type</option>
                        <option value="Full">Full</option>
                        <option value="Semi">Semi</option>
                        <option value="Unassembled">Unassembled</option>
                    </select>
                    {errors.assemble && <p className="text-red-500">{errors.assemble.message}</p>}
                </div>

                {/* Brand */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Brand</span>
                    </label>
                    <input
                        type="text"
                        {...register("brand", { required: "Brand is required" })}
                        className="input input-bordered w-full"
                        placeholder="Enter bike brand"
                    />
                    {errors.brand && <p className="text-red-500">{errors.brand.message}</p>}
                </div>

                {/* Category */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <input
                        type="text"
                        {...register("category", { required: "Category is required" })}
                        className="input input-bordered w-full"
                        placeholder="Enter category"
                    />
                    {errors.category && <p className="text-red-500">{errors.category.message}</p>}
                </div>

                {/* SubCategory */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Subcategory</span>
                    </label>
                    <input
                        type="text"
                        {...register("subCategory", { required: "Subcategory is required" })}
                        className="input input-bordered w-full"
                        placeholder="Enter subcategory"
                    />
                    {errors.subCategory && <p className="text-red-500">{errors.subCategory.message}</p>}
                </div>

                {/* Bike CC */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Bike CC</span>
                    </label>
                    <input
                        type="text"
                        {...register("bikeCC", { required: "Bike CC is required" })}
                        className="input input-bordered w-full"
                        placeholder="Enter bike CC"
                    />
                    {errors.bikeCC && <p className="text-red-500">{errors.bikeCC.message}</p>}
                </div>

                {/* Color */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Color</span>
                    </label>
                    <input
                        type="text"
                        {...register("color", { required: "Color is required" })}
                        className="input input-bordered w-full"
                        placeholder="Enter color"
                    />
                    {errors.color && <p className="text-red-500">{errors.color.message}</p>}
                </div>

                {/* Stock */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Stock</span>
                    </label>
                    <input
                        type="number"
                        {...register("stock", { required: "Stock is required" })}
                        className="input input-bordered w-full"
                        placeholder="Enter stock"
                    />
                    {errors.stock && <p className="text-red-500">{errors.stock.message}</p>}
                </div>

                {/* Image URL */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input
                        type="text"
                        {...register("imageURL", { required: "Image URL is required" })}
                        className="input input-bordered w-full"
                        placeholder="Enter image URL"
                    />
                    {errors.imageURL && <p className="text-red-500">{errors.imageURL.message}</p>}
                </div>

                {/* Country */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Country</span>
                    </label>
                    <input
                        type="text"
                        {...register("country", { required: "Country is required" })}
                        className="input input-bordered w-full"
                        placeholder="Enter country of origin"
                    />
                    {errors.country && <p className="text-red-500">{errors.country.message}</p>}
                </div>

                {/* Available */}
                <div className="form-control">
                    <label className="cursor-pointer label">
                        <span className="label-text">Available</span>
                        <input
                            type="checkbox"
                            {...register("available")}
                            className="checkbox checkbox-primary"
                        />
                    </label>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-full">Submit</button>
            </form>
        </div>
    );
};

export default AddBikes;