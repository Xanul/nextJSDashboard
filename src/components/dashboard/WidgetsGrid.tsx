"use client";
import React, { useEffect, useState } from "react";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store";
import { FavoritePokemonsWidget } from "@/pokemons/components/FavoritePokemonsWidget";
import { MyWidget } from "./MyWidget";
import { TodosWidget } from "@/todos/components/TodosWidget";
import { ProductsWidget } from "../../products/components/ProductsWidget";
import { ProductInCart } from "@/products/data/products";
import { IoCalculator } from "react-icons/io5";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaRegClock } from "react-icons/fa";

interface Props {
  cart?: ProductInCart[];
}

export const WidgetsGrid = ({ cart }: Props) => {
  const count = useAppSelector((state) => state.counter.count);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString("es-MX", {
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h24",
    })
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString("es-MX", {
          hour: "2-digit",
          minute: "2-digit",
          hourCycle: "h24",
        })
      );
    }, 60000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex flex-wrap p-4 justify-between gap-3">
      <SimpleWidget
        title="Counter"
        icon={<IoCalculator size={50} className="text-blue-500" />}
        value={count.toString()}
        subValue="Items in Counter"
        href="/dashboard/counter"
      />
      <SimpleWidget
        title="Weather"
        icon={<TiWeatherPartlySunny size={50} className="text-blue-500" />}
        value="37°C"
        subValue="Merida, Yucatan"
        href="/dashboard/counter"
      />
      <SimpleWidget
        title="Time"
        icon={<FaRegClock size={50} className="text-blue-500" />}
        value={currentTime}
        subValue="Afternoon"
        href="/dashboard/counter"
      />
      <ProductsWidget cart={cart} />
      <TodosWidget />
      <FavoritePokemonsWidget />
    </div>
  );
};
