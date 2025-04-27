import { GetProps, Input, InputProps } from "antd";
import { useRef } from "react";
import useArticleStore from "../../store/article/useArticleStore";

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const CustomSearchBar = (props: InputProps) => {
    const DEBOUNCE_TIME: number = 500
    const { setQueryString } = useArticleStore()
    const debounceTimer = useRef<number | null>(null);

    const handleChange: SearchProps["onChange"] = (e) => {
        if (debounceTimer.current) {
            clearTimeout(debounceTimer.current);
        }
        const value = e.target.value;
        debounceTimer.current = window.setTimeout(() => {
            setQueryString(value)
        }, DEBOUNCE_TIME);
    };

    const onSearch: SearchProps["onSearch"] = (value) => {
        setQueryString(value)
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