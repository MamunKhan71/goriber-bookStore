function Book({ book , handleCart}) {
    const { name, image, originalPrice, discountPrice } = book;
    

    return (
        <div>
            <div className="card card-compact bg-base-100 p-6 border-2 border-dashed border-amber-200">
                <figure><img className="rounded-2xl h-96 w-96 object-cover" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-lg">{name}</h2>
                    <div className="flex gap-4 items-center text-lg font-bold">
                        <span className="line-through">{originalPrice} Tk</span><span className="rounded-xl bg-yellow-200 px-2 py-2">{discountPrice} Tk</span>
                    </div>
                    <div className="card-actions justify-start">
                        <button onClick={()=>{handleCart(book)}} className="btn bg-gradient-to-r from-green-400 to-blue-500 px-8 text-white text-base hover:from-pink-500 hover:to-yellow-500">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Book;