"use client"
import Breadcrumb from './../../_components/Breadcrumb';
import GlobalApi from './../../_utils/GlobalApi'
import React, { useEffect, useState } from 'react'
import ProjectBanner from './_components/ProjectBanner';
import ProjectInfo from './_components/ProjectInfo';
import ProductList from './../../_components/ProductList';
import { usePathname } from 'next/navigation';

function ProjectDetail({params}) {
  
    //Use to get the Url Path
    const path=usePathname();

    const [productDetail,setProductDetail]=useState();
    const [productList,setProductList]=useState([]);
    
    useEffect(()=>{
        console.log("Project Path",path)
        getProductById_();
    },[])
    
    const getProductById_=()=>{
        GlobalApi.getProductById(params?.projectId).then(resp=>{
            
            setProductDetail(resp.data.data);
            getProductListByCategory(resp.data.data);
        })
    }

    const getProductListByCategory=(product)=>{
        GlobalApi.getProductByCategory(product?.attributes?.category)
        .then(resp=>{
            console.log(resp);
            setProductList(resp.data.data)
        })
    }
  return (
    <div className='p-5 py-12 px-10 md:px-28'>
        <Breadcrumb path={path}/>
        <div className='grid grid-cols-1 
        sm:grid-cols-2 mt-10 gap-5 sm:gap-10
         '>
            <ProjectBanner product={productDetail}/>
            <ProjectInfo product={productDetail}/>
        </div>

           {productList&& <div className='mt-20'>
            <h2 className='font-medium text-[20px] mb-4'>Similar Projects</h2>
                    <ProductList productList={productList} />
            </div>}
      
    </div>
  )
}

export default ProjectDetail