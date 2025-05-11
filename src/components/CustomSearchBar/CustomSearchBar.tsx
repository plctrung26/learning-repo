import { GetProps, Input, InputProps } from "antd";
import { useRef } from "react";

type SearchProps = GetProps<typeof Input.Search>;

export interface CustomInputProps extends InputProps {
    queryFunction?: (queryKey: string) => void
}

const { Search } = Input;

const CustomSearchBar = ({ queryFunction = () => { }, ...props }: CustomInputProps) => {
    const DEBOUNCE_TIME: number = 500
    const debounceTimer = useRef<number | null>(null);

    const handleChange: SearchProps["onChange"] = (e) => {
        if (debounceTimer.current) {
            clearTimeout(debounceTimer.current);
        }
        const value = e.target.value;
        debounceTimer.current = window.setTimeout(() => {
            queryFunction(value)
            console.log("I am query")
        }, DEBOUNCE_TIME);
    };

    const onSearch: SearchProps["onSearch"] = (value) => {
        queryFunction(value)
    };

    return (
        <Search
            placeholder="input search text"
            onSearch={onSearch}
            className='search-bar'
            onChange={handleChange}
            {...props}
        />
    )
}

export default CustomSearchBar