

const UserReviewAdd = () => {
    const handleAddReview = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const designation = form.designation.value;
        const rating = form.rating.value;
        const photoURL = form.photourl.value;
        const review = form.review.value;
        const allData= { name, designation, rating, photoURL, review };
        fetch('http://localhost:5000/reviews',{
           method: "POST",
           headers: {'Content-Type':'application/json'},
           body: JSON.stringify(allData)
        })
        .then(res=> res.json())
        .then(data=>console.log(data))
        // Log the values for now
        console.log({ name, designation, rating, photoURL, review });

        // Here you would typically send the data to your server or handle it as needed
    };

    return (
        <div>
            <div className="card w-full">
                <form onSubmit={handleAddReview} className="card-body">
                    <div className="md:flex gap-12">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-bordered text-black bg-white rounded-sm" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Designation</span>
                            </label>
                            <input type="text" placeholder="Designation" name="designation" className="input input-bordered text-black bg-white rounded-sm" />

                        </div>

                    </div>
                    <div className="md:flex gap-12">

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" placeholder="Rating" name="rating" className="input input-bordered text-black bg-white rounded-sm" />

                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" placeholder="photoURL" name="photourl" className="input input-bordered text-black bg-white rounded-sm" />

                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Review</span>
                        </label>
                        <textarea type="text" placeholder="Review" name="review" className="input input-bordered h-48 text-black bg-white rounded-sm" required />

                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className='bg-[#E76F51] text-white px-12 py-3 font-semibold rounded-md hover:bg-[#181818]'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default UserReviewAdd;