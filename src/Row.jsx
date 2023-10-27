import { useState, useEffect } from "react"

function Row({ s_No, objId, provideData, productInti, imageInti, priceInti, discountInti, subCategoryInti, categoryInti }) {

    const [category, setCategory] = useState(categoryInti);
    const [subCategory, setSubCategory] = useState(subCategoryInti);
    const [product, setProduct] = useState(productInti);
    const [image, setImage] = useState(imageInti);
    const [price, setPrice] = useState(priceInti);
    const [discount, setDiscount] = useState(discountInti)

    const [finalprice, setFinalPrice] = useState(0);

    // console.log(category , subCategory , product , image , price , discount ,"2");

    const handleClick = () => {
        if (product === "" && image === "" && price === "" && discount === "") {
            alert("Please enter all fields to proceed further.");
            return;
        }
        else if (s_No === 1 && product !== "" && image !== "" && price !== "" && discount !== "") {
            return provideData({ data: { category, subCategory, product, image, price, discount, objId, finalprice }, remove: null });
        } else if (s_No !== 1) {
            return provideData({ data: null, remove: { objId } });
        }
    }

    //category !== "" && subCategory !== "" and category === "" || subCategory === ""

    useEffect(() => {
        const priceInt = Number(price);
        const discountInt = Number(discount)
        const calPrice = priceInt - (priceInt * discountInt) / 100;
        // console.log(calPrice,priceInt,discountInt,"1")
        setFinalPrice(calPrice.toString());
    }, [discount, price])

    return (
        <div className="row">

            <div className="rowcontainer" style={{ display: "block" }}>
                <div className="sno">
                    {/* <span>
                    {s_No}
                </span> */}
                </div>

                <div className="subrow1" >
                    <div className="category">
                        <label htmlFor="category">Category</label>
                        <select name="category" id="category" required onChange={(e) => { setCategory(e.target.value) }}>

                            <option value="category1">Category1</option>
                            <option value="category2">Category2</option>
                            <option value="category3">Category3</option>
                            <option value="category4">Category4</option>
                        </select>
                    </div>
                    <div className="subcategory">
                        <label htmlFor="subcategory">Select Sub Category</label>
                        <select name="subcategory" id="subcategory" required onChange={(e) => { setSubCategory(e.target.value) }}>

                            <option value="subcategory1">{`${category} sub-Category1`}</option>
                            <option value="subcategory2">{`${category} sub-Category2`}</option>
                            <option value="subcategory3">{`${category} sub-Category3`}</option>
                            <option value="subcategory4">{`${category} sub-Category4`}</option>
                        </select>
                    </div>
                    <div className="productname" >
                        <label htmlFor="productname">Product Name</label>
                        <input type="text" required id="productname" onChange={(e) => { setProduct(e.target.value) }} />
                    </div>
                    <div className="image" >
                        <label htmlFor="imgae">Image</label>
                        <input type="file" name="image" required onChange={(e) => { setImage(e.target.files[0]) }} />
                    </div>
                </div>
            </div>
            <div className="subrow2">
                <div className="price">
                    <label htmlFor="price" style={{ marginLeft: "-55px" }}>Price</label>
                    <input style={{ marginLeft: "-55px" }} type="text" name="price" id="price" onChange={(e) => { setPrice(e.target.value) }} />
                </div>
                <div className="discount">
                    <label htmlFor="discount" style={{ marginLeft: "-99px" }}>Discount</label>
                    <input type="text" required id="discount" onChange={(e) => { setDiscount(e.target.value) }} style={{ marginLeft: "-100px" }} />
                </div>
                <div className="finalprice" style={{ marginLeft: "-10px" }} >
                    <label htmlFor="">Final Price</label>
                    <input style={{ marginRight: "174px" }} type="text" readOnly id="finalprice" value={finalprice} />
                </div>
                {s_No === 1 ? <div className="btnadd">
                    <button onClick={() => { handleClick() }} style={{ marginRight: "50px" }}  >Add New</button>
                </div> : <div className="btnremove">
                    <button onClick={() => { handleClick() }} style={{ backgroundColor: "orange", marginRight: "50px" }}> remove</button>
                </div>} 

            </div>
        </div>
    )
}

export default Row