function App() {
    const [tempProduct, setTempProduct] = React.useState({});
    const products=[
        {
            id:1,
            title:"草莓莓果夾心圈",
            catagory:"甜甜圈",
            description:"濃郁的草莓風味，中心填入滑順不膩口的卡士達內餡，帶來滿滿幸福感！",
            content:"尺寸：14x14cm",
            originPrice:"150",
            price:"99",
            isEnabled:true,
            imgUrl:"https://images.unsplash.com/photo-1583182332473-b31ba08929c8",
            moreImgUrl:[
                "https://images.unsplash.com/photo-1626094309830-abbb0c99da4a",
                "https://images.unsplash.com/photo-1559656914-a30970c1affd"
            ]
        },
        {
            id:2,
            title:"蜂蜜檸檬蛋糕",
            catagory:"蛋糕",
            description:"蜜蜂蜜蛋糕，夾層夾上酸酸甜甜的檸檬餡，清爽可口的滋味讓人口水直流！",
            content:"尺寸：6寸",
            originPrice:"1000",
            price:"900",
            isEnabled:false,
            imgUrl:"https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
            moreImgUrl:[
                "https://images.unsplash.com/photo-1618888007540-2bdead974bbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80",
                "https://images.unsplash.com/photo-1540337706094-da10342c93d8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGNha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
            ]
        },
        {
            id:3,
            title:"暗黑千層",
            catagory:"蛋糕",
            description:"法式煎薄餅加上濃郁可可醬，呈現經典的美味及口感。",
            content:"尺寸：6寸",
            originPrice:"700",
            price:"600",
            isEnabled:true,
            imgUrl:"https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGNha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
            moreImgUrl:[
                "https://images.unsplash.com/flagged/photo-1557234985-425e10c9d7f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA5fHxjYWtlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
                "https://images.unsplash.com/photo-1540337706094-da10342c93d8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGNha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
            ]
        }
    ]
    return (
    <div className="container">
        <div className="row mt-5">
            <div className="col-6">
                <div className="table ">
                    <h2>產品列表</h2>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>產品名稱</th>
                                <th>原價</th>
                                <th>售價</th>
                                <th>是否啟用</th>
                                <th>查看細節</th>
                            </tr>
                        </thead>
                        <tbody>
                            { products.map(function(item){
                            return (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.originPrice}</td>
                                <td>{item.price}</td>
                                <td>{item.isEnabled ? '啟用':'未啟用'}</td>
                                <td>
                                    <button type="button" className="btn btn-primary"
                                    onClick={()=>{setTempProduct(item)}}
                                    >查看細節</button>
                                </td>
                            </tr>)})
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="col-6">
            <h2>單一產品細節</h2>
                {tempProduct.title ?
                (<div className="card border w-100">
                    <img src={tempProduct.imgUrl}className="card-img-top"
                        alt={tempProduct.title} />
                    <div className="card-body">
                        <h5 className="card-title">{tempProduct.title}
                            <span className="badge bg-primary ms-2">{tempProduct.catagory}</span>
                        </h5>
                        <p className="card-text">商品描述：{tempProduct.description}</p>
                        <p className="card-text">商品內容：{tempProduct.content}</p>
                        <p className="card-text"><del className="text-secondary">{tempProduct.originPrice}</del> 元 / {tempProduct.price} 元</p>
                        <h5>更多圖片：</h5>
                        <div className="d-flex">
                        {tempProduct.moreImgUrl?.map((url,index)=>(
                            <img src={url} alt={index} className="card-img-bottom me-2" />)
                        )}
                        </div>
                    </div>
                </div>)
                :(<h4 className="text-secondary">請選擇一個商品查看</h4>)}
            </div>
        </div>
    </div>
    )
}


ReactDOM.createRoot(document.querySelector('.root')).render(<App />);