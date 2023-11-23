import { useEffect, useState } from "react";

const useMenu = () => {
    const [Menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMenu(data);
                setLoading(false);
            });
    }, [])
    console.log(Menu);
    return [Menu, loading]
}

export default useMenu;