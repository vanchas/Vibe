import React, { useState } from 'react'

export default function AdminCategories({ createCategory,
  editCategory,
  deleteCategory }) {
  const [newName, setName] = useState('');
  const [id, setId] = useState('');

  const createSubmitHandler = (e) => {
    e.preventDefault();
    if (newName.length) {
      createCategory(newName);
      setName('');
    }
  }
  const editSubmitHandler = (e) => {
    e.preventDefault();
    if (newName.length && id.toString().length) {
      editCategory(id, newName);
      setName('');
      setId('');
    }
  }
  const deleteSubmitHandler = (e) => {
    e.preventDefault();
    if (id.toString().length) {
      deleteCategory(id);
      setId('');
    }
  }

  return (
    <div className=" container text-white">
      <div className="h2">Categories control</div>
      <div className="h4">Category create</div>
      <form onSubmit={createSubmitHandler} className="form-group">
        <label className="form-group">
          Category name
          <input type="text" onChange={e => setName(e.target.value)} className="form-control" value={newName} />
        </label>
        <button type="submit" className="btn btn-secondary">Add</button>
      </form>
      <div className="h4">Category edit</div>
      <form onSubmit={editSubmitHandler} className="form-group">
        <label className="form-group">
          Category name
          <input type="text" onChange={e => setName(e.target.value)} className="form-control" value={newName} />
        </label>
        <label className="form-group">
          Category id
          <input type="number" onChange={e => setId(e.target.value)} className="form-control" value={id} />
        </label>
        <button type="submit" className="btn btn-secondary">Save</button>
      </form>
      <div className="h4">Category delete</div>
      <form onSubmit={deleteSubmitHandler} className="form-group">
        <label className="form-group">
          Category id
          <input type="number" onChange={e => setId(e.target.value)} className="form-control" value={id} />
        </label>
        <button type="submit" className="btn btn-secondary">Delete</button>
      </form>
    </div>
  )
}
