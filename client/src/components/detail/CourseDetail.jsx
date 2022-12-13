import React, { useEffect } from "react";
import { getCourseDetail } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import './CourseDetail.module.css';
import Navbar from "../navbar/Navbar";
import Footer2 from "../footer/Footer2";
import style from "../detail/CourseDetail.module.css";
import { Center, Square, Circle, Box, Badge, useDisclosure, Button, Input, Image } from '@chakra-ui/react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';

import { RiArrowGoBackLine } from "react-icons/ri";

export default function Detail() {

  const dispatch = useDispatch();

  const { id } = useParams();

  const myCourse = useSelector(state => state.courseDetail)
  useEffect(() => {
    dispatch(getCourseDetail(id));
  }, [dispatch, id])


  // "category": "Bebe de benja", varias categorias? 
  // "description": "The best course to learn how to create your first repository on GitHub.",
  // "name": "El mejor curso de tu vida",
  // "rating": "4.5",
  // "students": [
  // "German",
  // "Bianca",
  // "Fermin"
  // ],
  // "teacher": "Franco Cartucho",
  // "video": [
  // "https://www.youtube.com/watch?v=C6IjS7jKnjQ",
  // "https://www.youtube.com/watch?v=vlCXdvcgiE0",
  // "https://www.youtube.com/watch?v=DinilgacaWs"
  // ]


  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()


  return (
    <>
      <div>
        <Navbar />
        <Link style={{ textDecoration: 'none' }} to='/course'>
          <Button colorScheme='blue' leftIcon={<RiArrowGoBackLine />}>Back</Button>
          {/* <button className="back">Back</button> */}
        </Link>

        {
          myCourse ?
            <div className={style.content}>
              <div className={style.header}>

                <Box borderWidth='1px' borderRadius='lg' overflow='hidden'>
                  <Center h='100px' color='black'>
                    <h1 className={style.title}>{`${myCourse?.name}`}</h1>
                  </ Center>
                  <Box>
                    <Center>
                      <Image src="https://www.unapiquitos.edu.pe/contenido/opiniones/recursos/docenteClases.jpg" />
                    </Center>
                  </Box>
                  <Box>
                    <Center>
                      <Box p='6'>
                        <Box display='flex' alignItems='baseline'>
                          <Badge borderRadius='full' px='2' colorScheme='teal'>
                            New
                          </Badge>
                          <Box
                            color='gray.500'
                            fontWeight='semibold'
                            letterSpacing='wide'
                            fontSize='xs'
                            textTransform='uppercase'
                            ml='2'
                          ><h3>Teacher:{myCourse?.teacher}</h3>

                          </Box>
                        </Box>
                        <Box fontWeight='semibold' textTransform='uppercase' >
                          <p>Descripcion:{myCourse?.description}</p>
                        </Box>
                        <Box>
                          <Link to={`/detail/${id}/videos`}>
                            <button>Ver todos los videos de este curso</button>
                          </Link>
                          {/* <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                              Open
                            </Button> */}
                          <Drawer
                            isOpen={isOpen}
                            placement='right'
                            onClose={onClose}
                            finalFocusRef={btnRef}
                          ></Drawer>


                          <Drawer
                            isOpen={isOpen}
                            placement='right'
                            onClose={onClose}
                            finalFocusRef={btnRef}
                          >
                            <DrawerOverlay />
                            <DrawerContent>
                              <DrawerCloseButton />
                              <DrawerHeader>Create your account</DrawerHeader>

                              <DrawerBody>
                                <Input placeholder='Type here...' />
                              </DrawerBody>

                              <DrawerFooter>
                                <Button variant='outline' mr={3} onClick={onClose}>
                                  Cancel
                                </Button>
                                <Button colorScheme='blue'>Save</Button>
                              </DrawerFooter>
                            </DrawerContent>
                          </Drawer>


                          {/* <Video videos={myCourse.video}/> */}
                        </Box>
                        <Box>

                          <h3> <strong> Category: </strong> </h3>

                          {myCourse.categories?.map((e, i) => <h1 key={i}>{e.name}</h1>)}

                        </Box>
                      </Box>
                    </Center>
                  </Box>
                  {/* <h3>Teacher:{myCourse?.teacher}</h3>
                    <br /> */}

                  <br />
                  <div>
                  </div>
                  <br />
                  <div>
                  </div>
                </Box>
              </div>
            </div>
            : <p>Loading..</p>
        }

        <Footer2 />
      </div >
    </>
  )
}
