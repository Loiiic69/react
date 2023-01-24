export function Table(props){
    return(
      <div className="App-header">
        <Title>{props.title}</Title>
        <body>
          <table class="tableau-style">
            <thead>
              <tr>
                {props.colones.map(function(colone){
                    return <th>{colone}</th>
                })}
              </tr>
            </thead>
            <tbody>
            {props.children}
            </tbody>
          </table>
        </body>
      </div>
    );
}

export function Title(props){
    return <h1 className="title">{props.children}</h1>
}