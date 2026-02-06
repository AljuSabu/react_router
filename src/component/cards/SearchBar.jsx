import React from 'react'
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <>
            <div className="relative text-white">
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 md:text-3xl! xl:text-4xl!" />
                <input
                    type="text"
                    placeholder="Search models..."
                    className="bg-slate-900 border border-white/10 rounded-full focus:outline-none focus:border-blue-500 transition-all pl-12 md:pl-15 py-3 xl:py-4 text-xs md:text-base xl:text-lg w-full md:w-70 lg:w-80 xl:w-100"
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value) }}
                />
            </div>
        </>
    )
}

export default SearchBar