import {ProjectJsonParser} from 'project-json'
import axios from 'axios'

;(async () => {
  const parser = new ProjectJsonParser()
  const response = await axios.get('https://projects.scratch.mit.edu/357137675')
  const project = parser.parse(response.data)

  console.log(project.sprites()[0].blocks().length)
})()