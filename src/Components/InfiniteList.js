import React, { useEffect, useState } from 'react';
import axios from "axios";

function InfiniteList() {
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)
            .then((response) => {
                setData([...data, ...response.data]);
            });
    }, [page]);
    console.log("data", data);
    console.log("page", page);

    function AddPageScroll(){
        setPage(prev => prev + 1);
    }

    window.onscroll = function (){
        console.log("window.innerHeight", window.innerHeight);
        console.log("document.documentElement.scrollTop", document.documentElement.scrollTop);
        console.log("document.documentElement.offsetHeight", document.documentElement.offsetHeight);
        if(window.innerHeight  + document.documentElement.scrollTop + 17 > document.documentElement.offsetHeight){
            AddPageScroll();
        }
    }

    return (
        <div>
            <div className="row" style={{padding:' 20px 50px'}}>
                {data.map((items, index) => {
                    return <div key={index} className="col col-lg-4 col-md-6 col-sm" style={{padding:' 20px 50px'}}>
                        <div class="card" >
                        <img src={items.url} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="card-text">{items.id}</p>
                            <p class="card-text">{items.title}</p>
                        </div>
                    </div>
                    </div>
                })
                }
            </div>
        </div>
    )
}

export default InfiniteList
