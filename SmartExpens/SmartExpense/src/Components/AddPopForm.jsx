import useFormContext  from "../States/useFormContext";

const AddPopForm = ({ Closepop }) => {
  const { formData, setFormData ,AddData} = useFormContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const SubmitForm = () => {
    AddData();
    Closepop();
    clearForm();
    
  }
  const clearForm = () => {
    setFormData({
      Name: "",
      Category: "",
      Price: "",
      Stock: "",
      BatchNum: "",
      Date: "",
      Status: ""
    });
    console.log('jjdj')
  };
  console.log(formData)

  

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="w-full max-w-lg bg-[#3a1a44] rounded-lg shadow-xl p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Add Bakery Item</h2>

          <button
            className="text-gray-300 hover:text-white text-xl cursor-pointer"
            onClick={Closepop}
          >
            ✕
          </button>   
        </div>

        {/* Form */}
        <div className="space-y-4 text-sm">
          <div>
            <label className="block text-xs text-gray-300 mb-1">
              Item Name
            </label>
            <input
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              placeholder="e.g. Chocolate Cake"
              className="w-full px-3 py-2 rounded bg-[#53305e] outline-none placeholder-gray-300"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-xs text-gray-300 mb-1">Category</label>
            <input
              type="text"
              name="Category"
              value={formData.Category}
              onChange={handleChange}
              placeholder="Cake / Bread / Pastry"
              className="w-full px-3 py-2 rounded bg-[#53305e] outline-none placeholder-gray-300"
            />
          </div>

          {/* Price & Stock */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-300 mb-1">
                Price (₹)
              </label>
              <input
                type="text"
                name="Price"
                value={formData.Price}
                onChange={handleChange}
                placeholder="0.00"
                className="w-full px-3 py-2 rounded bg-[#53305e] outline-none placeholder-gray-300"
                
              />
            </div>

            <div>
              <label className="block text-xs text-gray-300 mb-1">
                Stock Quantity
              </label>
              <input
                type="text"
                name="Stock"
                value={formData.Stock}
                onChange={handleChange}
                placeholder="e.g. 20"
                className="w-full px-3 py-2 rounded bg-[#53305e] outline-none placeholder-gray-300"
              />
            </div>
          </div>

          {/* Batch & Expiry */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-300 mb-1">
                Batch Number
              </label>
              <input
                type="text"
                name="BatchNum"
                value={FormData.BatchNum}
                onChange={handleChange}
                placeholder="e.g. BK1023"
                className="w-full px-3 py-2 rounded bg-[#53305e] outline-none placeholder-gray-300"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-300 mb-1">
                Expiry Date
              </label>
              <input
                type="date"
                name="Date"
                value={formData.Date || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-[#53305e] outline-none text-gray-300"
              />
            </div>
          </div>

          {/* Status */}
          <div>
            <label className="block text-xs text-gray-300 mb-1">Status</label>
            <select className="w-full px-3 py-2 rounded bg-[#53305e] outline-none text-gray-300" name="Status" value={formData.Status} onChange={handleChange}>
              <option></option>
              <option>Available</option>
              <option>Low Stock</option>
              <option>Out of Stock</option>
            </select>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button className="px-4 py-2 rounded-md bg-[#53305e] text-sm cursor-pointer" onClick={clearForm}>
            Cancel
          </button>

          <button className="px-4 py-2 rounded-md bg-orange-500 text-sm font-semibold hover:bg-orange-400 transition" onClick={SubmitForm}>
            Save Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPopForm;
