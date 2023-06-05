// import { Component } from 'react';
import css from './Searchbar.module.css'

export const Searchbar = ({onSubmit}) => {

    return (
        <header className={css.Searchbar}>
        <form onSubmit={onSubmit} className={css.SearchForm}>
          <button type="submit" className={css.SearchFormButton }>
            <span>Search</span>
          </button>

          <input
            name="query"
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    )

}


// export class Searchbar extends Component {
// //   state = {
// //     query: '',
//     // error : null,
//     // isLoading: false,
//   };

//   handleChange = e => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });

//   };

//   handleSubmit =  e =>  {
//     e.preventDefault();
//     this.props.handleSubmit(this.state);
//     this.setState({query: ''});
// };


//   render() {
//     const query = this.state.query;
//     return (
//       <>
//         <header className="searchbar">
//           <form onSubmit={this.handleSubmit} className="form">
//             <button type="submit" className="button">
//               <span className="button-label">Search</span>
//             </button>

//             <input
//             //   onChange={this.handleChange}
//               name="query"
//               value={query}
//               className="input"
//               type="text"
//               autoComplete="off"
//               autoFocus
//               placeholder="Search images and photos"
//             />
//           </form>
//         </header>
//       </>
//     );
//   }
// }

