import { setLoading } from "@/redux/features/loadingSlice";
import { useAppDispatch } from "@/redux/hooks";
import { makeToast } from "@/utils/helper";
import axios from "axios";
import React, { FormEvent, useState } from "react";

interface IPayload {
  imgSrc: null | string;
  fileKey: null | string;
  name: string;
  catagory: string;
  price: string;
}

const ProductForm = () => {
  const [payload, setPayload] = useState<IPayload>({
    imgSrc: null,
    fileKey: null,
    name: "",
    catagory: "",
    price: "",
  });
};

const dispatch = useAppDispatch();

const handleSubmit = (e: FormEvent) => {
  e.preventDefault();

  dispatch(setLoading(true));

  axios
    .post("/api/add_product", payload)
    .then((res) => {
      makeToast("Product added successfully!");
      setPayLoad({
        imgSrc: null,
        fileKey: null,
        name: "",
        catagory: "",
        price: "",
      });
    })
    .catch((err) => console.log(err))
    .finally(() => dispatch(setLoading(false)));
};

export default ProductForm;
