import storeBanner1 from "../../assets/img/storeBanner1.png"



const CartSlider = () => {
    return (
        <div className="carousel-container d-flex justify-content-center">
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img className="cartSlider-img" src={storeBanner1} alt="" />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img className="cartSlider-img" src={storeBanner1} alt="" />
                    </div>
                    <div class="carousel-item">
                        <img className="cartSlider-img" src={storeBanner1} alt="" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default CartSlider