import React from "react";
import "./Add.scss";

function Add() {
  return (
    <div className="add">
      <div className="container">
        <h3>Add New Gig</h3>

        <div className="sections">
          <div className="left">
            <label>Title</label>
            <input
              type="text"
              placeholder="e.g. I will do something I'm really good at"
            />

            <label htmlFor="">Category</label>
            <select name="cats" id="cats">
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>

            <label htmlFor="">Cover Image</label>
            <input type="file" />

            <label htmlFor="">Upload Image</label>
            <input type="file" />

            <label htmlFor="">Desctription</label>

            <textarea
              name=""
              id=""
              cols="30"
              rows="16"
              placeholder="Brief description to introduce your service to customers"
            ></textarea>
            <button>Create</button>
          </div>

          <div className="right">
            <label htmlFor="">Service Title</label>
            <input type="text" placeholder="e.g. One-page web design " />

            <label htmlFor="">Short Description</label>
            <textarea
              cols="30"
              rows="10"
              placeholder="Short description of your service"
            />

            <label htmlFor="">Delivery Time (e.g 3 days)</label>
            <input type="text" />

            <label htmlFor="">Revision Number</label>
            <input type="number" min={1} />

            <label htmlFor="">Add features</label>
            <input type="e.g. page design" />
            <input type="e.g. file uploading" />
            <input type="e.g. setting up a domain" />
            <input type="e.g. hosting" />

            <label htmlFor="">Price</label>
            <input type="number" min={1} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
