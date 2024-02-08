import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const renderRatingsFiltersList = () => {
    const {ratingDetails} = props

    return ratingDetails.map(ratingItem => {
      const {changeRating, rating} = props
      const onClickRatingItem = () => changeRating(ratingItem.ratingId)
      const ratingClassName =
        rating === ratingItem.ratingId ? 'and-up active-rating' : 'and-up'

      return (
        <li
          className="rating-item"
          key={ratingItem.ratingId}
          onClick={onClickRatingItem}
        >
          <img
            src={ratingItem.imageUrl}
            alt={`rating ${ratingItem.ratingId}`}
            className="rating-image"
          />
          <p className={ratingClassName}>& up</p>
        </li>
      )
    })
  }

  const renderCategoryFiltersList = () => {
    const {categoryDetails} = props

    return categoryDetails.map(categoryItem => {
      const {changeCategory, activeCategoryId} = props
      const onClickCategoryItem = () => changeCategory(categoryItem.categoryId)
      const categoryClassName =
        categoryItem.categoryId === activeCategoryId
          ? 'category-name active-category-name'
          : 'category-name'
      return (
        <li
          key={categoryItem.categoryId}
          className={categoryClassName}
          onClick={onClickCategoryItem}
        >
          {categoryItem.name}
        </li>
      )
    })
  }

  const renderRatingItems = () => (
    <div className="rating-container">
      <h1 className="rating-heading">Rating</h1>
      <ul className="ratings-list">{renderRatingsFiltersList()}</ul>
    </div>
  )

  const renderCategoryItems = () => (
    <div className="category-container">
      <h1 className="category-heading">Category</h1>
      <ul className="categories-list">{renderCategoryItems()}</ul>
    </div>
  )

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const renderSearchInput = () => {
    const {searchInput} = props
    return (
      <div>
        <input
          value={searchInput}
          type="search"
          className="search-input"
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }
  const {clearFilters} = props

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderRatingItems()}
      {renderCategoryItems()}
      <button className="clear-filter-btn" onClick={clearFilters} type="button">
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
