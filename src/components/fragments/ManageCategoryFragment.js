import { Container } from '@material-ui/core'
import React, { Component } from 'react'
import Category from "./Category"


class ManageCategoryFragment extends Component {
    render() {
        return (
            <Container>
                    <div className="row">
                        <div className="col-md-4">
                            <Category/>
                        </div>
                        <div className="col-md-8">
                            Category List
                        </div>
                    </div>
                </Container>
        )
    }
}

export default ManageCategoryFragment

