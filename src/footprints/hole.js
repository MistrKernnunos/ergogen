module.exports = {
 params: {
        class: 'HOLE',
        diameter: 2
    },
    body: p => {
        const standart =`
      (module Hole (layer F.Cu) (tedit 591DBFB1)
      ${p.at /* parametric position */}
      ${'' /* footprint reference */}

      ${'' /* via */}
     (pad "" np_thru_hole circle (at 0 0) (size ${p.param.diameter} ${p.param.diameter}) (drill ${p.param.diameter}) (layers *.Cu *.Mask))
     )
    `
    return standart
    }
}
