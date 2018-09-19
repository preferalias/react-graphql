import React from 'react'
import Main from '../App/Home'
import Sidebar from '../App/Home/sidebar';

export default props => {
  return (
    <div>
      <Main>
        <h1>Welcome!</h1>
        <hr/>
        <p>Lorem ipsum dolor, 
          sit amet consectetur 
          adipisicing elit. 
          Animi quam amet 
          earum suscipit laborum 
          illum facilis est repudiandae nihil nisi? 
          earum suscipit laborum a
          illum facilis est repudiandae nihil nisi
          At vero eos et accusamus et iusto odio dignissimos 
          ducimus qui blanditiis praesentium 
          voluptatum deleniti atque corrupti quos dolores 
          et quas molestias excepturi sint occaecati 
          cupiditate non provident, similique sunt in culpa qui 
          officia deserunt mollitia animi, id est laborum et 
          dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
          Nam libero tempore, cum soluta nobis est eligendi optio 
          cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
        </p>
      </Main>
      <Sidebar>
        <p>Consectetur adipisicing elit. In, ullam? ipsum dolor sit amet consectetur adipisicing dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
      </Sidebar>
    </div>
  )
}