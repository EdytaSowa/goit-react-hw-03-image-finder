import PropTypes from 'prop-types'
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


Searchbar.propTypes = {
  onSubmit: PropTypes.func,
}