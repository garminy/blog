class @Post extends React.Component
  @propTypes =
    title: React.PropTypes.string
    content: React.PropTypes.string
    created_at: React.PropTypes.string

  render: ->
    ret = `
     <div className={"show-post"} id={"show_post"}>
        <h2 className={"post-title"}>{ this.props.title }</h2>
        <div className={"post-extra"}>
          <div className={"author-info"}>
            <i className={"ion-person"} />
            <span className={"post-date"}>王若愚Max 发表于 { this.props.createdAt }</span>
          </div>
          <div className={"tags-info"}>
            <i className={"ion-pricetags"} />
          </div>
        </div>
        <div className={"post-content"}>{ this.props.content }</div>
      </div>
    `
    ret
