// Any MX switch
// Nets
//    from: corresponds to pin 1
//    to: corresponds to pin 2
// Params
//    hotswap: default is false
//      if true, will include holes and pads for Kailh MX hotswap sockets
//    reverse: default is false
//      if true, will flip the footprint such that the pcb can be reversible 
//    keycaps: default is false
//      if true, will add choc sized keycap box around the footprint
//
// note: hotswap and reverse can be used simultaneously

module.exports = {
  nets: {
    from: undefined,
    to: undefined
  },
  params: {
      class: 'S',
  },
  body: p => {
    const standard = `
      (module MX (layer F.Cu) (tedit 5DD4F656)
      ${p.at /* parametric position */}
(descr "Footprint for Cherry MX style switches with Kailh hotswap socket")
  (attr smd)
  (fp_text reference "REF**" (at 0 -7.6) (layer "F.SilkS") hide
    (effects (font (size 1 1) (thickness 0.15)))
    (tstamp abcea926-33d8-442d-a367-35cda3816ca5)
  )
  (fp_text value "SW_MX_HS_S_1u" (at 0 -8) (layer "F.SilkS") hide
    (effects (font (size 1 1) (thickness 0.15)))
    (tstamp 930a4898-6462-4f61-bbad-855140dc5618)
  )

  (fp_line (start -0.5 -5.6) (end 2.542893 -5.6) (layer "F.SilkS") (width 0.12) (tstamp 7bbf981c-a063-4e30-8911-e4228e1c0743))
  (fp_arc (start 2.542893 -5.6) (mid 3.25 -5.307107) (end 3.542893 -4.6) (layer "F.SilkS") (width 0.12) (tstamp 3e903008-0276-4a73-8edb-5d9dfde6297c))
  (fp_line (start -9.525 9.525) (end -9.525 -9.525) (layer "Dwgs.User") (width 0.12) (tstamp 74306595-ebad-4bd7-8c07-1c6483f071c9))
  (fp_line (start -9.525 -9.525) (end 9.525 -9.525) (layer "Dwgs.User") (width 0.12) (tstamp 7b82b5b6-22d3-4190-bd97-8bda880e3150))
  (fp_line (start 9.525 -9.525) (end 9.525 9.525) (layer "Dwgs.User") (width 0.12) (tstamp a6abb962-39c6-4b9a-b005-512238bd091c))
  (fp_line (start 9.525 9.525) (end -9.525 9.525) (layer "Dwgs.User") (width 0.12) (tstamp d6ccb0c8-8cc9-4389-9c84-413746b82e5a))
  (fp_line (start -7 -6.5) (end -7 6.5) (layer "Eco2.User") (width 0.05) (tstamp 510ee886-be4f-4140-89a6-ee031606b5dc))
  (fp_line (start 7 6.5) (end 7 -6.5) (layer "Eco2.User") (width 0.05) (tstamp 56be4aa7-7a3c-476c-b27e-2ef4f3d2dfd1))
  (fp_line (start -6.5 7) (end 6.5 7) (layer "Eco2.User") (width 0.05) (tstamp a52ac084-eaef-4e90-81e8-82e787aa3040))
  (fp_line (start 6.5 -7) (end -6.5 -7) (layer "Eco2.User") (width 0.05) (tstamp c7ea730e-13a5-4b48-921a-1e115f3e8956))
  (fp_arc (start 7 6.5) (mid 6.853553 6.853553) (end 6.5 7) (layer "Eco2.User") (width 0.05) (tstamp 04b68965-2fdb-4122-8486-fb22ad930f20))
  (fp_arc (start -7 -6.5) (mid -6.853553 -6.853553) (end -6.5 -7) (layer "Eco2.User") (width 0.05) (tstamp 3f2860a2-543d-4838-9f1b-588d41b3be29))
  (fp_arc (start 6.5 -7) (mid 6.853553 -6.853553) (end 7 -6.5) (layer "Eco2.User") (width 0.05) (tstamp 589d9a11-9a12-4352-9662-4435e3a0dacc))
  (fp_arc (start -6.497236 6.998884) (mid -6.850789 6.852437) (end -6.997236 6.498884) (layer "Eco2.User") (width 0.05) (tstamp b9341a1b-dc6a-4f93-856e-36020ce9d7b5))
  (fp_line (start -7 7) (end -7 -7) (layer "B.CrtYd") (width 0.05) (tstamp 1210dd5e-cb24-448e-8787-be6b70c9e12f))
  (fp_line (start -7 -7) (end 7 -7) (layer "B.CrtYd") (width 0.05) (tstamp 8ff1a877-72e4-470b-8ae9-35d34ed33485))
  (fp_line (start 7 7) (end -7 7) (layer "B.CrtYd") (width 0.05) (tstamp aea8023e-4745-4ffc-91dc-a313a21f6271))
  (fp_line (start 7 -7) (end 7 7) (layer "B.CrtYd") (width 0.05) (tstamp df2f3fc1-ca01-44e9-9fde-a52c6de7d243))
  (fp_line (start 6.085176 -3.75022) (end 8.685176 -3.75022) (layer "F.CrtYd") (width 0.05) (tstamp 0c9bae13-f24e-4e7c-861e-b76f4fca62a7))
  (fp_line (start -7.414824 -3.87022) (end -7.414824 -6.32022) (layer "F.CrtYd") (width 0.05) (tstamp 1877673d-daa1-4cca-b614-9d7d8e782822))
  (fp_line (start 8.685176 -3.75022) (end 8.685176 -1.30022) (layer "F.CrtYd") (width 0.05) (tstamp 22fe218f-cd70-40d4-84da-5b3454bd320a))
  (fp_line (start 8.685176 -1.30022) (end 6.085176 -1.30022) (layer "F.CrtYd") (width 0.05) (tstamp 2f5fbf7f-d40e-456b-aca8-a2cb60299beb))
  (fp_line (start -4.864824 -3.87022) (end -7.414824 -3.87022) (layer "F.CrtYd") (width 0.05) (tstamp 64c82231-0e65-4820-98bc-a4b00e119035))
  (fp_line (start -4.864824 -2.70022) (end 0.2 -2.70022) (layer "F.CrtYd") (width 0.05) (tstamp 724b4a75-1ff5-4351-9dd0-edf78a83428f))
  (fp_line (start -7.414824 -6.32022) (end -4.864824 -6.32022) (layer "F.CrtYd") (width 0.05) (tstamp 73024bc4-27db-4d1b-a434-4c53f7e703ad))
  (fp_line (start -4.864824 -3.87022) (end -4.864824 -2.70022) (layer "F.CrtYd") (width 0.05) (tstamp 80005750-aa03-46c7-b049-84fc4e84e361))
  (fp_line (start -4.864824 -6.75022) (end -4.864824 -6.32022) (layer "F.CrtYd") (width 0.05) (tstamp 8cb5b7a7-9ff1-4fdd-9a03-40f206235354))
  (fp_line (start 6.085176 -1.30022) (end 6.085176 -0.86022) (layer "F.CrtYd") (width 0.05) (tstamp 912d4a2a-3b61-4ffa-8943-2712435ac4fd))
  (fp_line (start 6.085176 -0.86022) (end 2.494322 -0.86022) (layer "F.CrtYd") (width 0.05) (tstamp 9b3bc6b9-e314-474e-9ed9-ea87f01cd311))
  (fp_line (start 6.085176 -3.75022) (end 6.085176 -4.75022) (layer "F.CrtYd") (width 0.05) (tstamp e171153b-2a7f-4fca-bbdf-7a18af6a7133))
  (fp_line (start 4.085176 -6.75022) (end -4.864824 -6.75022) (layer "F.CrtYd") (width 0.05) (tstamp e1f4f38b-347f-4fc8-93a8-0b1b1641ba44))
  (fp_arc (start 4.085176 -6.75022) (mid 5.49939 -6.164434) (end 6.085176 -4.75022) (layer "F.CrtYd") (width 0.05) (tstamp dacecaae-53de-455d-b0ff-c5c16e20626c))
  (fp_arc (start 0.2 -2.70022) (mid 1.670503 -2.183399) (end 2.494322 -0.86022) (layer "F.CrtYd") (width 0.05) (tstamp f928a26d-a3d3-4fb3-9806-30be7175a7c0))
  (pad "" np_thru_hole circle (at 5.08 0) (size 1.75 1.75) (drill 1.75) (layers *.Cu *.Mask) (tstamp cc9b3f43-dda1-4ddd-b125-29d2dfb90375))
  (pad "" np_thru_hole circle (at 0 0) (size 3.9878 3.9878) (drill 3.9878) (layers *.Cu *.Mask) (tstamp e51bca19-f6a2-465e-ad69-da03145fe870))
  (pad "" np_thru_hole circle (at -5.08 0) (size 1.75 1.75) (drill 1.75) (layers *.Cu *.Mask) (tstamp ec8122ca-7f62-429e-878f-11558e016561))
  (pad "1" smd rect (at 5.635 -2.54 180) (size 1.65 2.5) (layers "F.Cu") (tstamp e690e57f-f859-4a48-bb06-d239997b1350))
  (pad "1" smd roundrect (at 7.36 -2.54) (size 2.55 2.5) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.1) (tstamp f200f7ff-c180-4b88-af2f-15382c7ef9f8))
  (pad "1" thru_hole circle (at 3.81 -2.54) (size 3.3 3.3) (drill 3) (layers *.Cu *.Mask) (tstamp f931232a-e0ed-4928-bd42-952175a01e45))
  (pad "2" thru_hole circle (at -2.54 -5.08) (size 3.3 3.3) (drill 3) (layers *.Cu *.Mask) (tstamp 03e21442-98c6-468f-a9bf-67569c56c4d9))
  (pad "2" smd roundrect (at -6.09 -5.08) (size 2.55 2.5) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.1) (tstamp 1db8ccdb-d377-428b-b096-5e1ee7615369))
  (pad "2" smd rect (at -4.34 -5.08) (size 1.65 2.5) (layers "F.Cu") (tstamp 49f51109-9137-4a03-bf00-7871ed55aa7d))
  (model "${KIPRJMOD}/marbastlib/3d/HS_Kailh_MX.step"
    (offset (xyz -4.82 6.74 1.82))
    (scale (xyz 1 1 1))
    (rotate (xyz 180 0 0))
  )
  (model "${KIPRJMOD}/../marbastlib/3d/HS_Kailh_MX.step"
    (offset (xyz -4.82 6.74 1.82))
    (scale (xyz 1 1 1))
    (rotate (xyz 180 0 0))
  )
  (model "${KIPRJMOD}/../3d/HS_Kailh_MX.step"
    (offset (xyz -4.82 6.74 1.82))
    (scale (xyz 1 1 1))
    (rotate (xyz 180 0 0))
  )
  )

      `
   return standard
  }
}
