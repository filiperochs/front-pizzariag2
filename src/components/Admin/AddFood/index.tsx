import { AssetUploader, Loader } from "../..";
import { BiCategory, BiFoodMenu } from "react-icons/bi";
import {
  MdDeleteOutline,
  MdOutlineDataSaverOn,
  MdOutlineFastfood,
  MdOutlineFoodBank,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";
import {
  firebaseFetchFoodItems,
  firebaseRemoveUploadedImage,
  firebaseSaveProduct,
} from "../../../Firebase";

import { Categories } from "../../../utils/categories";
import CategoriesSelector from "./CategoriesSelector";
import { GiTakeMyMoney } from "react-icons/gi";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useState } from "react";
import { useStateValue } from "../../../context/StateProvider";
import { fetchFoodData } from "../../../utils/functions";

const AddFood = () => {
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [loaderMessage, setLoadermessage] = useState("");
  const [{ foodItems }, dispatch] = useStateValue();

  const deleteImage = () => {
    setLoadermessage("Removendo imagem......");
    firebaseRemoveUploadedImage(image, setImage, setLoading);
  };
  const saveItem = () => {
    setLoadermessage(`Salvando Produto ${title}.`);
    setLoading(true);
    try {
      if (!title || !calories || !price || !image || !category) {
        toast.error("Preencha todos os campos antes de salvar o produto 🤗");
        setLoading(false);
        return;
      } else {
        const data = {
          id: Date.now(),
          title: title,
          calories: calories,
          category: category,
          description: description,
          price: price,
          imageURL: image,
          qty: quantity,
        };
        toast
          .promise(firebaseSaveProduct(data), {
            pending: "Salvando Produto...",
            success: "Produto salvo com sucesso 🤗",
            error: "Erro salvando produto, tente novamente 🤗",
          })
          .then(() => {
            clearForm();
            setLoading(false);
            fetchFoodData(dispatch);
          })
          .catch((error) => {
            console.log(error);
          });
        setLoadermessage("");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("Erro enquanto salvava o produto");
    }
  };
  const clearForm = () => {
    setTitle("");
    setCalories("");
    setPrice("");
    setImage(null);
    // setCategory("");
    setQuantity("");
    setDescription("");
  };

  const validateNumber = (value: any) => {
    if (isNaN(value)) {
      toast.error("Preencha um número válido", { toastId: 123 });
      return "";
    }
    return value;
  };

  return (
    <div className="w-full h-fullflex items-center justify-center">
      <div className="border w-full  flex border-gray-300 items-center rounded-lg p-4 flex-col justify-center gap-4  ">
        <div className="w-full py-3 border-b border-gray-300 flex -tems-center gap-2">
          <MdOutlineFastfood className="text-xl text-gray-600" />
          <input
            type="text"
            required
            placeholder="Nome da comida"
            autoFocus
            className="h-full w-full  bg-transparent pl-2 text-textColor outline-none border-none placeholder:text-gray-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <BiCategory className="text-xl text-gray-600" />
            <CategoriesSelector
              categories={Categories}
              action={setCategory}
              selected={category}
            />
          </div>
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdOutlineProductionQuantityLimits className="text-gray-600 text-2xl" />
            <input
              type="text"
              required
              placeholder="Quantidade"
              autoFocus
              className="h-full w-full  bg-transparent pl-2 text-textColor outline-none border-none placeholder:text-gray-400"
              value={quantity}
              onChange={(e) => setQuantity(validateNumber(e.target.value))}
            />
          </div>
        </div>
        <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-[225px]  md:h-[420px] round-lg">
          {loading ? (
            <Loader progress={loaderMessage} />
          ) : (
            <>
              {image ? (
                <>
                  <div className="relative h-full">
                    <img
                      src={image}
                      alt="uploaded food"
                      className="w-full h-full object-cover"
                    />
                    <motion.button
                      whileTap={{ scale: 1.1 }}
                      whileHover={{ scale: 1.2 }}
                      title="Remover imagem"
                      className="absolute bottom-3 right-3 rounded-full p-2 md:p-5 bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out"
                      onClick={() => deleteImage()}
                    >
                      <MdDeleteOutline className="text-white" />
                    </motion.button>
                  </div>
                </>
              ) : (
                <AssetUploader
                  action={setImage}
                  progressHandler={setLoadermessage}
                  promise={setLoading}
                />
              )}
            </>
          )}
        </div>
        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdOutlineFoodBank className="text-gray-600 text-2xl" />
            <input
              type="text"
              required
              placeholder="Calorias"
              autoFocus
              className="h-full w-full  bg-transparent pl-2 text-textColor outline-none border-none placeholder:text-gray-400"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
            />
          </div>
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <GiTakeMyMoney className="text-gray-600 text-2xl" />
            <input
              type="text"
              required
              placeholder="Preço"
              autoFocus
              className="h-full w-full  bg-transparent pl-2 text-textColor outline-none border-none placeholder:text-gray-400"
              value={price}
              onChange={(e) => setPrice(validateNumber(e.target.value))}
            />
          </div>
        </div>
        <div className="w-full py-3 border-b border-gray-300 flex -tems-center gap-2">
          <BiFoodMenu className="text-xl text-gray-600" />
          <input
            type="text"
            required
            placeholder="Descrição curta"
            autoFocus
            className="h-full w-full  bg-transparent pl-2 text-textColor outline-none border-none placeholder:text-gray-400"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="w-full flex items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="ml-0 flex justify-center items-center gap-2 flex-row-reverse md:ml-auto w-full md:w-auto border-none outline-none rounded bg-orange-500 px-12 py-2 text-lg text-white"
            onClick={() => saveItem()}
          >
            <MdOutlineDataSaverOn /> Salvar
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
