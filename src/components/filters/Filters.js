import React, { Component } from 'react';
import $ from 'jquery';

function getFilterHeader() {
  return (
    <div className="grid-x align-justify align-middle">
      <h1 className="filters-header">SUCHFILTER</h1>
      <button type="reset" className="clear-all" id="clear-all-filters">Alles zurücksetzen</button>
    </div>
  );
}

function getSelectionFilter(title, choices, idPrefix) {
  return (
    <li className="filters-tab">
      <a href="#">{title}</a>
      <ul className="categories-menu menu vertical nested">
        {choices.map(item => {
          const id = (idPrefix + item).replace(/[^a-z0-9\-_:\.]|^[^a-z]+/gi, "");
          return (
            <li key={id}>
              <input className="category-clear-selection" id={id} type="checkbox"/><label htmlFor={id}>{item}</label>
            </li>
          );
        })}
      </ul>
    </li>
  );
}

class Filters extends Component {

  constructor(props) {
    super(props);
    this.values = {
      certificates: [
        'DGNP-Gold',
        'Green Globe',
        'GCB Green Member',
        'FSC-Papier',
      ],
      foodImpact: [
        'Gering',
        'Mittel',
        'Hoch'
      ],
      rating: [
        'Gering',
        'Mittel',
        'Hoch'
      ],
    };
  }


  componentDidMount() {
    //More (Expand) or Less (Collapse)
    $('.categories-menu.menu.nested').each(function(){
      const filterAmount = $(this).find('li').length;
      if( filterAmount > 5){
        $('li', this).eq(4).nextAll().hide().addClass('toggleable');
        $(this).append('<li className="more">More</li>');
      }
    });

    $('.categories-menu.menu.nested').on('click','.more', function(){
      if( $(this).hasClass('less') ){
        $(this).text('More').removeClass('less');
      }else{
        $(this).text('Less').addClass('less');
      }
      $(this).siblings('li.toggleable').slideToggle();
    });
  }

  render() {
    return (
      <div className="filters">
        <form className="mobile-form show-for-small-only">
          <ul className="mobile-filters vertical menu accordion-menu" data-accordion-menu>
            <li>
              {getFilterHeader()}
              {this.getFilterList({isMobileForm: true})}
            </li>
          </ul>
        </form>

        <form className="desktop-form hide-for-small-only">
          {getFilterHeader()}
          {this.getFilterList({})}
        </form>
      </div>
    );
  }

  getFilterList({ isMobileForm }) {
    let idPrefix = 'mobile-';
    if (!isMobileForm) {
      idPrefix = 'desktop-';
    }
    return (
      <ul className="vertical menu accordion-menu" data-accordion-menu>
        <li className="filters-tab">
          <a href="#">Ort</a>
          <ul className="categories-menu menu vertical nested is-active">
            <li><input type="text" defaultValue="Frankfurt"/></li>
          </ul>
        </li>
        <li className="filters-tab">
          <a href="#">Anlass</a>
          <ul className="categories-menu menu vertical nested is-active">
            <li><input type="text" defaultValue="Kongress"/></li>
          </ul>
        </li>
        <li className="filters-tab">
          <a href="#">Personen</a>
          <ul className="categories-menu menu vertical nested is-active">
            <li><input type="number" defaultValue="10"/></li>
          </ul>
        </li>
        {getSelectionFilter("Zertifikate", this.values.certificates, idPrefix + 'cert-')}
        {getSelectionFilter("Food Impact", this.values.foodImpact, idPrefix + 'food-')}
        {getSelectionFilter("Bewertung", this.values.rating, idPrefix + 'rating-')}
      </ul>
    );
  }
}

export default Filters;
