import React, { Component } from 'react';
import $ from 'jquery';
import './Filters.css'

class Filters extends Component {
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
        <ul className="mobile-filters vertical menu accordion-menu show-for-small-only" data-accordion-menu>
         <li>
           <div className="grid-x align-justify align-middle">
             <h1 className="filters-header hide-for-small-only">SUCHFILTER</h1>
             <a href="#" className="clear-all" id="clear-all-filters">Alle aufheben</a>
           </div>
           <ul className="vertical menu accordion-menu" data-accordion-menu>
            <li className="filters-tab">
              <a href="#">Ort</a>
              <ul className="categories-menu menu vertical nested is-active">
                 <li><input className="category-clear-selection" id="category-checkbox1" type="checkbox" /><label htmlFor="category-checkbox1">Category 1</label></li>
                 <li><input className="category-clear-selection" id="category-checkbox2" type="checkbox" /><label htmlFor="category-checkbox2">Category 2</label></li>
                 <li><input className="category-clear-selection" id="category-checkbox3" type="checkbox" /><label htmlFor="category-checkbox3">Category 3</label></li>
                 <li><input className="category-clear-selection" id="category-checkbox4" type="checkbox" /><label htmlFor="category-checkbox4">Category 4</label></li>
                 <li><input className="category-clear-selection" id="category-checkbox5" type="checkbox" /><label htmlFor="category-checkbox5">Category 5</label></li>
                 <li><input className="category-clear-selection" id="category-checkbox6" type="checkbox" /><label htmlFor="category-checkbox6">Category 6</label></li>
                 <li><input className="category-clear-selection" id="category-checkbox7" type="checkbox" /><label htmlFor="category-checkbox7">Category 7</label></li>
                 <li><input className="category-clear-selection" id="category-checkbox8" type="checkbox" /><label htmlFor="category-checkbox8">Category 8</label></li>
                 <li><input className="category-clear-selection" id="category-checkbox9" type="checkbox" /><label htmlFor="category-checkbox9">Category 9</label></li>
                 <li><input className="category-clear-selection" id="category-checkbox10" type="checkbox" /><label htmlFor="category-checkbox10">Category 10</label></li>
                 <li><input className="category-clear-selection" id="category-checkbox11" type="checkbox" /><label htmlFor="category-checkbox11">Category 11</label></li>
                 <li><input className="category-clear-selection" id="category-checkbox12" type="checkbox" /><label htmlFor="category-checkbox12">Category 12</label></li>
                 <li><input className="category-clear-selection" id="category-checkbox13" type="checkbox" /><label htmlFor="category-checkbox13">Category 13</label></li>
                 <li><input className="category-clear-selection" id="category-checkbox14" type="checkbox" /><label htmlFor="category-checkbox14">Category 14</label></li>
                 <li><input className="category-clear-selection" id="category-checkbox15" type="checkbox" /><label htmlFor="category-checkbox15">Category 15</label></li>
               </ul>
           </li>
           <li className="filters-tab">
              <a href="#">Anlass</a>
              <ul className="categories-menu menu vertical nested is-active">
                <li><input id="size-checkbox1" type="checkbox" /><label htmlFor="size-checkbox1">Small</label></li>
                <li><input id="size-checkbox2" type="checkbox" /><label htmlFor="size-checkbox2">Medium</label></li>
                <li><input id="size-checkbox3" type="checkbox" /><label htmlFor="size-checkbox3">Large</label></li>
                <li><input id="size-checkbox3" type="checkbox" /><label htmlFor="size-checkbox3">X-Large</label></li>
                <li><input id="size-checkbox3" type="checkbox" /><label htmlFor="size-checkbox3">XX-Large</label></li>
              </ul>
            </li>
           <li className="filters-tab">
              <a href="#">Personen</a>
              <ul className="categories-menu menu vertical nested">
                <li><input id="color-checkbox1" type="checkbox" /><label htmlFor="color-checkbox1">All Color</label></li>
                <li><input id="color-checkbox2" type="checkbox" /><label htmlFor="color-checkbox2">Black</label></li>
                <li><input id="color-checkbox3" type="checkbox" /><label htmlFor="color-checkbox3">White</label></li>
                <li><input id="color-checkbox4" type="checkbox" /><label htmlFor="color-checkbox4">Grey</label></li>
                <li><input id="color-checkbox5" type="checkbox" /><label htmlFor="color-checkbox5">Red</label></li>
                <li><input id="color-checkbox6" type="checkbox" /><label htmlFor="color-checkbox6">Blue</label></li>
                <li><input id="color-checkbox7" type="checkbox" /><label htmlFor="color-checkbox7">Green</label></li>
                <li><input id="color-checkbox8" type="checkbox" /><label htmlFor="color-checkbox8">Purple</label></li>
                <li><input id="color-checkbox8" type="checkbox" /><label htmlFor="color-checkbox8">Multi-color</label></li>
              </ul>
            </li>
           <li className="filters-tab">
              <a href="#">Zertifikate</a>
              <ul className="categories-menu menu vertical nested">
                <li><input id="price-checkbox1" type="checkbox" /><label htmlFor="price-checkbox1">Under $25</label></li>
                <li><input id="price-checkbox2" type="checkbox" /><label htmlFor="price-checkbox2">$25–$50</label></li>
                <li><input id="price-checkbox3" type="checkbox" /><label htmlFor="price-checkbox3">$50–$250</label></li>
                <li><input id="price-checkbox4" type="checkbox" /><label htmlFor="price-checkbox4">$250–$600</label></li>
                <li><input id="price-checkbox4" type="checkbox" /><label htmlFor="price-checkbox4">$600–$1,000</label></li>
              </ul>
            </li>
           </ul>
         </li>
       </ul>

       <div className="grid-x align-justify align-middle">
         <h1 className="filters-header hide-for-small-only">SUCHFILTER</h1>
         <a href="#" className="clear-all" id="clear-all-filters">Alle aufheben</a>
       </div>
       <ul className="vertical menu accordion-menu hide-for-small-only" data-accordion-menu>
          <li className="filters-tab">
            <a href="#">Ort</a>
            <ul className="categories-menu menu vertical nested is-active">
               <li><input id="category-checkbox1" type="checkbox" /><label htmlFor="category-checkbox1">Category 1</label></li>
               <li><input id="category-checkbox2" type="checkbox" /><label htmlFor="category-checkbox2">Category 2</label></li>
               <li><input id="category-checkbox3" type="checkbox" /><label htmlFor="category-checkbox3">Category 3</label></li>
               <li><input id="category-checkbox4" type="checkbox" /><label htmlFor="category-checkbox4">Category 4</label></li>
               <li><input id="category-checkbox5" type="checkbox" /><label htmlFor="category-checkbox5">Category 5</label></li>
               <li><input id="category-checkbox6" type="checkbox" /><label htmlFor="category-checkbox6">Category 6</label></li>
               <li><input id="category-checkbox7" type="checkbox" /><label htmlFor="category-checkbox7">Category 7</label></li>
               <li><input id="category-checkbox8" type="checkbox" /><label htmlFor="category-checkbox8">Category 8</label></li>
               <li><input id="category-checkbox9" type="checkbox" /><label htmlFor="category-checkbox9">Category 9</label></li>
               <li><input id="category-checkbox10" type="checkbox" /><label htmlFor="category-checkbox10">Category 10</label></li>
               <li><input id="category-checkbox11" type="checkbox" /><label htmlFor="category-checkbox11">Category 11</label></li>
               <li><input id="category-checkbox12" type="checkbox" /><label htmlFor="category-checkbox12">Category 12</label></li>
               <li><input id="category-checkbox13" type="checkbox" /><label htmlFor="category-checkbox13">Category 13</label></li>
               <li><input id="category-checkbox14" type="checkbox" /><label htmlFor="category-checkbox14">Category 14</label></li>
               <li><input id="category-checkbox15" type="checkbox" /><label htmlFor="category-checkbox15">Category 15</label></li>
            </ul>
         </li>
         <li className="filters-tab">
            <a href="#">Anlass</a>
            <ul className="categories-menu menu vertical nested is-active">
              <li><input id="size-checkbox1" type="checkbox" /><label htmlFor="size-checkbox1">Small</label></li>
              <li><input id="size-checkbox2" type="checkbox" /><label htmlFor="size-checkbox2">Medium</label></li>
              <li><input id="size-checkbox3" type="checkbox" /><label htmlFor="size-checkbox3">Large</label></li>
              <li><input id="size-checkbox3" type="checkbox" /><label htmlFor="size-checkbox3">X-Large</label></li>
              <li><input id="size-checkbox3" type="checkbox" /><label htmlFor="size-checkbox3">XX-Large</label></li>
            </ul>
         </li>
         <li className="filters-tab">
            <a href="#">Personen</a>
            <ul className="categories-menu menu vertical nested">
              <li><input id="color-checkbox1" type="checkbox" /><label htmlFor="color-checkbox1">All Color</label></li>
              <li><input id="color-checkbox2" type="checkbox" /><label htmlFor="color-checkbox2">Black</label></li>
              <li><input id="color-checkbox3" type="checkbox" /><label htmlFor="color-checkbox3">White</label></li>
              <li><input id="color-checkbox4" type="checkbox" /><label htmlFor="color-checkbox4">Grey</label></li>
              <li><input id="color-checkbox5" type="checkbox" /><label htmlFor="color-checkbox5">Red</label></li>
              <li><input id="color-checkbox6" type="checkbox" /><label htmlFor="color-checkbox6">Blue</label></li>
              <li><input id="color-checkbox7" type="checkbox" /><label htmlFor="color-checkbox7">Green</label></li>
              <li><input id="color-checkbox8" type="checkbox" /><label htmlFor="color-checkbox8">Purple</label></li>
              <li><input id="color-checkbox8" type="checkbox" /><label htmlFor="color-checkbox8">Multi-color</label></li>
            </ul>
         </li>
         <li className="filters-tab">
            <a href="#">Zertifikate</a>
            <ul className="categories-menu menu vertical nested">
              <li><input id="price-checkbox1" type="checkbox" /><label htmlFor="price-checkbox1">Under $25</label></li>
              <li><input id="price-checkbox2" type="checkbox" /><label htmlFor="price-checkbox2">$25–$50</label></li>
              <li><input id="price-checkbox3" type="checkbox" /><label htmlFor="price-checkbox3">$50–$250</label></li>
              <li><input id="price-checkbox4" type="checkbox" /><label htmlFor="price-checkbox4">$250–$600</label></li>
              <li><input id="price-checkbox4" type="checkbox" /><label htmlFor="price-checkbox4">$600–$1,000</label></li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default Filters;
