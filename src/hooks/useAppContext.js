import { useContext } from "react";
import { AppContext } from "../contexts";

export function useAppContext(props) {
    const context = useContext(AppContext);

    return context
}