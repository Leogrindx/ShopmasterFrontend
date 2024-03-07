import { useState } from "react";
import { itemsType } from "../../config/ItemsType";

export const useMenu = (gender: string) => {
  const [type, setType] = useState<string[]>([]);
  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();
  const paramWrap = { 
    widthBlock: 200, 
    heightBlock: 50, 
    sizeColumn: 5 }
  const sort = (underType: string = "shoes") => {
    itemsType.forEach((e) => {
      if (e.type === gender && e.underType === underType) {
        setType(e.data);
        calculateWidth(e.data.length)
      }
    });
  };
  const calculateWidth = (arrayLength:number) => {
    const columns = Math.ceil(arrayLength/paramWrap.sizeColumn)
    const width = columns*paramWrap.widthBlock
    const height = paramWrap.heightBlock*paramWrap.sizeColumn
    setWidth(width)
    setHeight(height)
  }
  return { type, sort, calculateWidth, width, height};
};
