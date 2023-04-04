import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


const FeatureItem = ({ image, dobol, name, link }) => {
  return (
    <div className="space-y-8 shadow-black shadow-lg m-5 p-5 w-10/12">
        <div>
          <img src={image} alt="" />
        </div>
        <div>
        <h1 className="font-bold text-2xl">{name}</h1>
        <p className="flex-wrap">{dobol}</p>
        <div>
        </div>
        <div className="mt-8 bg-emerald-500 w-26 justify-center h-10 text-2xl rounded-full hover:bg-green-300 hover:text-white">
          <a href={link} className="flex justify-center ">Visit</a>
        </div>
      </div>
    </div>
  );
};

export default FeatureItem;
