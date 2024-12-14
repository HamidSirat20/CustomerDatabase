import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { GlobalDispatch } from "../redux/store";
import { GlobalState } from "../redux/store";

export const useCustomDispatch: () => GlobalDispatch = useDispatch;
export const useCustomSelector: TypedUseSelectorHook<GlobalState> = useSelector;
