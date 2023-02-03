const Product= require("../models/product");

const getALLProducts= async(req,res)=>{
    const {company,name,featured,sort,select}=req.query;
    const queryObj={};
    if(company){
        queryObj.company={$regex:company, $options: "i"};
        
    }
    if(name){
        queryObj.name={$regex:name, $options: "i"};
       
    }
    if(featured){
        queryObj.featured={$regex:featured, $options: "i"};  
    }
    let apiData=Product.find(queryObj);
    if(sort){
    let sortFix= sort.split(",").join(" ");
    apiData= apiData.sort(sortFix);
    }
    if(select){
        let selectFix= select.split(",").join(" ");
        apiData= apiData.select(selectFix);
        }
        //creating pagination logic
        const page= Number(req.query.page) || 1;
        let limit = Number(req.query.limit) || 10;
        let skip= (page-1)*limit;

        apiData=apiData.skip(skip).limit(limit);

    console.log(queryObj);
    const Products= await apiData;
res.status(200).json({Products,nbHits: Products.length});
};

const getALLProductsTesting= async(req,res)=>{
    const {company,name,featured,sort,select}=req.query;
    const queryObj={};
    if(company){
        queryObj.company={$regex:company, $options: "i"};
        
    }
    if(name){
        queryObj.name={$regex:name, $options: "i"};
       
    }
    if(featured){
        queryObj.featured={$regex:featured, $options: "i"};  
    }
    let apiData=Product.find(queryObj);
    if(sort){
    let sortFix= sort.split(",").join(" ");
    apiData= apiData.sort(sortFix);
    }
    if(select){
        let selectFix= select.split(",").join(" ");
        apiData= apiData.select(selectFix);
        }
        //creating pagination logic
        const page= Number(req.query.page) || 1;
        let limit = Number(req.query.limit) || 10;
        let skip= (page-1)*limit;

        apiData=apiData.skip(skip).limit(limit);

    console.log(queryObj);
    const Products= await apiData;
res.status(200).json({Products,nbHits: Products.length});
    };

    module.exports={getALLProducts,getALLProductsTesting};