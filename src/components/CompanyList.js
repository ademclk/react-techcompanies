import React from "react";
import Card from "./Card";

const CompanyList = ({companies}) => {

    return (
        <div>
            {
                companies.map((company, index) => {
                    return (
                        <Card
                            key={index}
                            name={companies[index].name}
                            img={companies[index].image}
                            desc={companies[index].description}
                        />
                    );
                })
            }
        </div>
    )
}

export default CompanyList;