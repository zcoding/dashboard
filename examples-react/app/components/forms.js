import React from 'react'

export default class Forms extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="db-g db-padding">
        <div className="u-sm-16">
          <div className="db-panel">
            <form action="/" className="form">
              <fieldset>
                <div className="form-control">
                  <label htmlFor="name1">Name</label>
                  <input type="text" id="name1" placeholder="type your name"/>
                </div>
                <div className="form-control">
                  <label htmlFor="password1">Password</label>
                  <input type="password" id="password1" placeholder="type password"/>
                </div>
                <div className="form-control">
                  <label htmlFor="content1">Content</label>
                  <textarea id="content1" rows="5"></textarea>
                </div>
                <div className="form-control">
                  <label htmlFor="select1">Select</label>
                  <select name="select" id="select1">
                    <option value="1">options 1</option>
                    <option value="2">options 2</option>
                    <option value="3">options 3</option>
                  </select>
                </div>
                <div className="form-control">
                  <label htmlFor="name2">Name</label>
                  <input type="text" id="name2" className="db-field-m" placeholder="type your name"/>
                </div>
                <div className="form-control">
                  <label htmlFor="password2">Password</label>
                  <input type="password" id="password2" className="db-field-m" placeholder="type password"/>
                </div>
                <div className="form-control">
                  <label htmlFor="content2">Content</label>
                  <textarea className="db-field-m" id="content2" rows="5"></textarea>
                </div>
                <div>
                  <label className="db-check"><input type="checkbox" name="check1"/><i></i>Option1</label>
                  <label className="db-check"><input type="checkbox" name="check1"/><i></i>Option2</label>
                  <label className="db-check"><input type="checkbox" name="check1"/><i></i>Option3</label>
                </div>
                <div>
                  <label className="db-radio"><input type="radio" name="radio1"/><i></i>Option1</label>
                  <label className="db-radio"><input type="radio" name="radio1"/><i></i>Option2</label>
                  <label className="db-radio"><input type="radio" name="radio1"/><i></i>Option3</label>
                </div>
                <div>
                  <label className="db-switch"><input type="checkbox" name="check2"/><i></i>A</label>
                  <label className="db-switch"><input type="checkbox" name="check2"/><i></i>B</label>
                  <label className="db-switch"><input type="checkbox" name="check2"/><i></i>C</label>
                </div>
                <div>
                  <label className="db-switch"><input type="radio" name="radio2"/><i></i>A1</label>
                  <label className="db-switch"><input type="radio" name="radio2"/><i></i>A2</label>
                  <label className="db-switch"><input type="radio" name="radio2"/><i></i>A3</label>
                </div>

                <div className={'form-control'}>
                  <label htmlFor="danger">Danger Style</label>
                  <input className={'input-danger'} id="danger" type="text" placeholder="error input"/>
                </div>
                <div className={'form-control'}>
                  <label htmlFor="warning">Warning Style</label>
                  <input className={'input-warning'} id="warning" type="text" placeholder="warning input"/>
                </div>
                <div className={'form-control'}>
                  <label htmlFor="primary">Primary Style</label>
                  <input className={'input-primary'} id="primary" type="text" placeholder="primary input"/>
                </div>
                <div className={'form-control'}>
                  <label htmlFor="success">Success Style</label>
                  <input className={'input-success'} id="success" type="text" placeholder="success input"/>
                </div>
                <div className={'form-control'}>
                  <label htmlFor="secondary">Secondary Style</label>
                  <input className={'input-secondary'} id="secondary" type="text" placeholder="secondary input"/>
                </div>
                <div className={'form-control'}>
                  <label htmlFor="tips">Tips Style</label>
                  <input className={'input-tips'} id="tips" type="text" placeholder="tips input"/>
                </div>
                <div className={'form-control'}>
                  <label htmlFor="info">Info Style</label>
                  <input className={'input-info'} id="info" type="text" placeholder="info input"/>
                </div>
                <div className={'form-control'}>
                  <label htmlFor="dark">Dark Style</label>
                  <input className={'input-dark'} id="dark" type="text" placeholder="dark input"/>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    )
  }

}
