const App = () => {
    const [products, setProducts] = React.useState([]);
    const [form, setForm] = React.useState({
        name: "",
        price: "",
    });

    React.useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
    }

    async function handleFormSubmit(e) {
        e.preventDefault();
        if (!form.name || !form.price) {
            return;
        }

        const res = await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        });
        const data = await res.json();

        fetchData();
        setForm({
            name: "",
            price: "",
        });
    }

    function updateForm(event, field) {
        // if (field === "name") {
        //     setForm({ ...form, name: event.target.value });
        // } else if (field === "price") {
        //     setForm({ ...form, price: event.target.value });
        // }

        //better solution
        setForm({
            ...form,
            [field]: event.target.value,
        });
    }

    function deleteProduct(productId) {
        fetch(`/api/products/${productId}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => fetchData());
    }

    return (
        <>
            <div className="card">
                <div className="card-header">Add Products</div>
                <div className="card-body">
                    <form onClick={handleFormSubmit}>
                        <div className="mb-3">
                            <label htmlFor="productName" className="form-label">
                                Product Name
                            </label>
                            <input
                                value={form.name}
                                onChange={() => updateForm(event, "name")}
                                type="text"
                                className="form-control"
                                id="productName"
                                aria-describedby="emailHelp"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="productPrice"
                                className="form-label"
                            >
                                Product Price
                            </label>
                            <input
                                value={form.price}
                                onChange={() => updateForm(event, "price")}
                                type="text"
                                className="form-control"
                                id="productPrice"
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <ul className="list-group mt-4">
                {products.map((product) => {
                    return (
                        <li
                            key={product.id}
                            className="list-group-item d-flex justify-content-between align-items-center"
                        >
                            <div>
                                <strong>{product.name}: </strong>$
                                {product.price}
                            </div>
                            <button
                                className="btn"
                                onClick={() => deleteProduct(product.id)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-trash"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                    <path
                                        fillRule="evenodd"
                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                    />
                                </svg>
                            </button>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
