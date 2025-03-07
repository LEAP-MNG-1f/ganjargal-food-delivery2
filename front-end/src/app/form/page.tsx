"use client"; // This marks the component as a client component

import Link from "next/link";
import { useState, useEffect } from "react";

const FoodDeliveryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    district: "",
    neighborhood: "",
    address: "",
    paymentMethod: "",
    medeelel: "",
    phone: "",
  });

  const [cartItems, setCartItems] = useState<any[]>([]);
  const [orderSummaryVisible, setOrderSummaryVisible] = useState(false);

  // Fetch cart data from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      paymentMethod: e.target.value,
    }));
  };

  const handleOrderSubmit = () => {
    if (
      !formData.district ||
      !formData.address ||
      !formData.paymentMethod ||
      !formData.medeelel ||
      !formData.phone
    ) {
      alert("Бүх мэдээллийг оруулна уу.");
      return;
    }

    setOrderSummaryVisible(true);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between p-8 bg-white shadow-lg rounded-lg gap-6">
      {/* Step 1: Delivery Form */}
      <div className="w-full lg:w-1/2 p-4 bg-white shadow-md rounded-lg">
        <div className="flex items-center gap-2 justify-start">
          <input
            type="radio"
            id="cash"
            name="paymentMethod"
            // value="cash"
            // checked={formData.paymentMethod === "cash"}
            // onChange={handlePaymentChange}
            className="h-8 w-8 text-blue-600"
          />
          <h2 className="text-xl font-semibold mb-4">
            Хаалтын мэдээлэл оруулна уу
          </h2>
        </div>

        {/* District Selector */}
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="district"
          >
            Дүүрэг сонгоно уу
          </label>
          <select
            id="district"
            name="district"
            value={formData.district}
            onChange={handleSelectChange}
            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"
          >
            <option value="">Дүүрэг сонгоно уу</option>
            <option value="city1">Дүүрэг 1</option>
            <option value="city2">Дүүрэг 2</option>
            <option value="city3">Дүүрэг 3</option>
          </select>
        </div>

        {/* Address Input */}
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="address"
          >
            Хаяг
          </label>
          <input
            id="address"
            name="address"
            type="text"
            value={formData.address}
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                address: e.target.value,
              }))
            }
            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"
            placeholder="Орц, давхар, орцын код ..."
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="address"
          >
            нэмэлт Мэдээлэл
          </label>
          <input
            id="medeelel"
            name="medeelel"
            type="text"
            value={formData.medeelel}
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                medeelel: e.target.value,
              }))
            }
            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"
            placeholder="мэдээлэл"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="address"
          >
            утасны дугаар
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            value={formData.phone}
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                phone: e.target.value,
              }))
            }
            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"
            placeholder="утасны дугаар"
          />
        </div>

        {/* Payment Method */}
        <div className="mb-4">
          <span className="block text-sm font-medium text-gray-700">
            Төлбөрийн арга
          </span>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="cash"
              name="paymentMethod"
              value="cash"
              checked={formData.paymentMethod === "cash"}
              onChange={handlePaymentChange}
              className="h-4 w-4 text-blue-600"
            />
            <label htmlFor="cash" className="ml-2">
              Бэлнээр
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="card"
              name="paymentMethod"
              value="card"
              checked={formData.paymentMethod === "card"}
              onChange={handlePaymentChange}
              className="h-4 w-4 text-blue-600"
            />
            <label htmlFor="card" className="ml-2">
              Карт
            </label>
          </div>
        </div>
      </div>

      {/* Step 2: Order Summary */}
      {/* {orderSummaryVisible && ( */}
      <div className="w-full lg:w-1/2 p-4 bg-gray-50 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Захиалга баталгаажуулах</h2>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={`${item.id}-${index}`} className="flex items-center mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
                <p className="text-xl font-bold">
                  {item.price.toLocaleString()}₮
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>Таны сав хоосон байна.</p>
        )}

        <div className="flex justify-between mt-4">
          <span className="text-lg font-semibold">Хаяг:</span>
          <span className="text-sm">{formData.address}</span>
        </div>

        <div className="flex justify-between mt-4">
          <span className="text-lg font-semibold">Нийт төлбөр:</span>
          <span className="text-xl font-bold">
            {cartItems
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toLocaleString()}
            ₮
          </span>
        </div>
        <Link href={"/confirmation"}>
          <button
            onClick={handleOrderSubmit}
            className="w-full bg-blue-500 text-white py-2 mt-6 rounded-md hover:bg-blue-600"
          >
            Захиалах
          </button>
        </Link>
      </div>

      {/* )} */}
    </div>
  );
};

export default FoodDeliveryForm;
