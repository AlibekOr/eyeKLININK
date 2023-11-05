import { useSelector } from "react-redux";
const PricesAll = () => {
    const pirce = useSelector((state) => state.cart)
    const allPirce = pirce.reduce((acc, el) => acc + (el.price * el.qty), 0)
    const allCount = pirce.reduce((acc, el) => acc + el.qty, 0)
    return { allCount, allPirce }
}


export default PricesAll