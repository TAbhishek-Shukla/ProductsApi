const expres=require("express")
const router= expres.Router();
const {getALLProducts,getALLProductsTesting}= require("../controllers/products");

router.route("/").get(getALLProducts);
router.route("/testing").get(getALLProductsTesting);

module.exports=router;