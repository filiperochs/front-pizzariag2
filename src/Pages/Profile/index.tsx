import { BiUser } from "react-icons/bi";
import { BsPhone } from "react-icons/bs";
import { MdOutlineDataSaverOn, MdDeleteOutline } from "react-icons/md";

import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useState } from "react";
import { useStateValue } from "../../context/StateProvider";
import { updateUserData } from "../../utils/functions";

const UpdateProfile = () => {
  const [{ user }, dispatch] = useStateValue();
  const [username, setUsername] = useState(user.username);
  const [bairro, setBairro] = useState(user.bairro);
  const [email, setEmail] = useState(user.email);
  const [cpf, setCpf] = useState(user.cpf);
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [rua, setRua] = useState(user.rua);
  const [btnText, setBtnText] = useState("Save");
  const [loaderMessage, setLoadermessage] = useState("");

  // const deleteImage = async () => {
  //   setLoadermessage("Removing Photo......");
  //   firebaseRemoveUploadedImage(photoURL, setPhotoURL, setLoading);
  //   const data = { ...user, photoURL: null };
  //   await updateUserData(data, dispatch, false);
  // };
  const saveChanges = async () => {
    setBtnText("Salvando....");
    if (username.lenth < 0 || phoneNumber.length !== 10) {
      toast.error("Preencha os campos corretamente");
      setBtnText("Salvar");
    } else {
      const data = {
        ...user,
        username,
        phoneNumber,
        bairro,
      };
      await updateUserData(data, dispatch, true);
      setBtnText("Salvar");
    }
  };

  // const updatePhotoUrl = async (newUrl: string) => {
  //   setPhotoURL(newUrl);
  //   const data = { ...user, photoURL: newUrl };
  //   await updateUserData(data, dispatch, false);
  // };

  const validateNumber = (value: any) => {
    if (isNaN(value)) {
      toast.error("Insira um número válido", { toastId: 123 });
      return "";
    }
    return value;
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="border w-full  md:w-[60%]  flex border-gray-300 items-center rounded-lg p-4 flex-col justify-center gap-4  mt-8 mg:mt-10">
        <div className="w-full py-3 border-b border-gray-300 flex -tems-center gap-2">
          <input
            type="text"
            required
            placeholder="Nome completo"
            autoFocus
            className="h-full w-full  bg-transparent pl-2 text-textColor outline-none border-none placeholder:text-gray-400"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="w-full py-3 border-b border-gray-300 flex -tems-center gap-2">
          <input
            type="text"
            required
            placeholder="CPF"
            autoFocus
            className="h-full w-full  bg-transparent pl-2 text-textColor outline-none border-none placeholder:text-gray-400"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </div>

        <div className="w-full py-3 border-b border-gray-300 flex -tems-center gap-2">
          <input
            type="text"
            required
            placeholder="Email"
            autoFocus
            className="h-full w-full  bg-transparent pl-2 text-textColor outline-none border-none placeholder:text-gray-400"
            value={""}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <input
              type="text"
              required
              placeholder="Celular"
              className="h-full w-full  bg-transparent pl-2 text-textColor outline-none border-none placeholder:text-gray-400"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(validateNumber(e.target.value))}
            />
          </div>
        </div>

        <div className="w-full py-3 border-b border-gray-300 flex -tems-center gap-2">
          <input
            type="text"
            required
            placeholder="Rua"
            autoFocus
            className="h-full w-full  bg-transparent pl-2 text-textColor outline-none border-none placeholder:text-gray-400"
            value={rua}
            onChange={(e) => setRua(e.target.value)}
          />
        </div>

        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <label
              htmlFor="bairro"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Bairro
            </label>
            <select
              id="bairro"
              required
              placeholder="Bairro"
              className="h-full w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
              value={bairro}
              onChange={(e) => setBairro(validateNumber(e.target.value))}
            >
              <option selected value="0">
                Selecione o bairro
              </option>
              <option value="1">Bairro 1</option>
              <option value="2">Bairro 2</option>
              <option value="3">Bairro 3</option>
            </select>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="ml-0 flex justify-center items-center gap-2 flex-row-reverse md:ml-auto w-full md:w-auto border-none outline-none rounded bg-orange-500 px-12 py-2 text-lg text-white"
            onClick={() => saveChanges()}
          >
            <MdOutlineDataSaverOn /> {btnText}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
