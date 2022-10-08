import React, {Component} from "react";
import CompanyList from "../components/CompanyList";
import SearchBar from "../components/SearchBar";
import Scroll from "../components/Scroll"
import {data} from "../data";

class App extends Component {

    constructor() {
        super();
        this.state = {
            companies : data,
            searchField : ''
        }
    }

    handleSearchChange = (event) => {
        this.setState({searchField : event.target.value });
    }

    render() {

        const {companies, searchField} = this.state;

        const filteredCompanies = companies.filter(company => {
            return company.name.toLowerCase().includes(searchField.toLowerCase());
        })

        return !data.length ?
             <h1>LOADING...</h1> :
             (
                <div className='tc'>
                    <h1 className='tc'>Tech Companies</h1>
                    <SearchBar searchChange={this.handleSearchChange}/>
                    <Scroll>
                        <CompanyList companies={filteredCompanies}/>
                    </Scroll>
                </div>
             );
        }
}
export default App;