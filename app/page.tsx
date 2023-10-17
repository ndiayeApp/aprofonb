"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Box from '@mui/material/Box';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay, } from 'swiper/modules';
import { Typography } from '@mui/material';
import { Inter } from 'next/font/google'
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DoneIcon from '@mui/icons-material/Done';
import Drawer from '@mui/material/Drawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const pagination = {
    clickable: true,
    dynamicBullets: true,
    renderBullet: function (index: number, className: string) {
      return '<p class="pg_ ' + className + '"></p>';
    },
  };
  return (
    <>
      <Box id="decouvrir" sx={{
        flexGrow: 1, height: {
          xl: 545,
          lg: 545,
          md: 545,
          sm: 300,
          xs: 300,
        }
      }}>
        <Swiper autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }} loop={true}
          style={{ height: "100%", width: "100%", }}
          pagination={{
            clickable: true,
          }} navigation={true}
          modules={[Navigation, Pagination]}
          centeredSlides={true}
          className="mySwiper">
          <SwiperSlide style={{ backgroundImage: 'url("/c_1.png")', height: "100%", width: "100%", backgroundRepeat: "no-repeat" }}>
            <Typography className={inter.className} sx={{
              color: "white", marginLeft: 20, marginTop: 15,
              fontWeight: '900',
              display: {
                xl: "block",
                lg: "block",
                md: "block",
                sm: "none",
                xs: "none"
              }
            }} variant="h2" component="h2">
              Aprofonb
            </Typography>

            <Typography className={inter.className} sx={{
              color: "white", marginLeft: 2, marginTop: 6,
              fontWeight: '900',
              display: {
                xl: "none",
                lg: "none",
                md: "none",
                sm: "block",
                xs: "block"
              },
              fontSize: 25
            }} variant="h2" component="h2">
              Aprofonb
            </Typography>

            <Typography className={inter.className} sx={{
              color: "white", marginLeft: 20, marginTop: 1,
              display: {
                xl: "block",
                lg: "block",
                md: "block",
                sm: "none",
                xs: "none"
              }
            }} variant="h5" component="h5">
              Association pour la Protection des Forêts Naturelles du Bénin.
            </Typography>

            <Typography className={inter.className} sx={{
              color: "white", marginTop: 1, fontSize: 15, justifyContent: "center",
              display: {
                xl: "none",
                lg: "none",
                md: "none",
                sm: "flex",
                xs: "flex",
              }
            }} variant="h6" component="h6">
              Association pour la Protection des Forêts Naturelles du Bénin.
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center", }}>
              <Typography className={inter.className} sx={{
                display: {
                  xl: "block",
                  lg: "block",
                  md: "block",
                  sm: "none",
                  xs: "none"
                }, color: "white", marginTop: 5, width: 900, fontSize: 18, fontWeight: 100
              }} component="p">
                L’ONG APROFONB initialement dénommée ‘’Association pour la Protection des Forêts Naturelles de Bassila a révisé ses statuts en 1999 et
                a élargi son champ d’actions sur tout le pays. Son actuelle dénomination est ‘’Association pour la Protection des Forêts Naturelles du Bénin’’.
              </Typography>
              <Typography className={inter.className} sx={{
                display: {
                  xl: "none",
                  lg: "none",
                  md: "none",
                  sm: "block",
                  xs: "block",
                }, color: "white", marginTop: 3, width: 400, fontSize: 12, fontWeight: 100,
              }} component="p">
                L’ONG APROFONB initialement dénommée ‘’Association pour la Protection des Forêts Naturelles de Bassila a révisé ses statuts en 1999 et
                a élargi son champ d’actions sur tout le pays. Son actuelle dénomination est ‘’Association pour la Protection des Forêts Naturelles du Bénin’’.
              </Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide style={{ backgroundImage: `url("/c_2.jpg")`, height: "100%", width: "100%", backgroundRepeat: "no-repeat" }}>
            <Typography className={inter.className} sx={{
              color: "white", marginLeft: 20, marginTop: 15,
              fontWeight: '900',
              display: {
                xl: "block",
                lg: "block",
                md: "block",
                sm: "none",
                xs: "none"
              }
            }} variant="h2" component="h2">
              Aprofonb
            </Typography>

            <Typography className={inter.className} sx={{
              color: "white", marginLeft: 2, marginTop: 6,
              fontWeight: '900',
              display: {
                xl: "none",
                lg: "none",
                md: "none",
                sm: "block",
                xs: "block"
              },
              fontSize: 25
            }} variant="h2" component="h2">
              Aprofonb
            </Typography>

            <Typography className={inter.className} sx={{
              color: "white", marginLeft: 20, marginTop: 1,
              display: {
                xl: "block",
                lg: "block",
                md: "block",
                sm: "none",
                xs: "none"
              }
            }} variant="h5" component="h5">
              Context de  création
            </Typography>

            <Typography className={inter.className} sx={{
              color: "white", marginTop: 1, fontSize: 15, justifyContent: "center",
              display: {
                xl: "none",
                lg: "none",
                md: "none",
                sm: "flex",
                xs: "flex",
              }
            }} variant="h6" component="h6">
              Context de  création
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center", }}>
              <Typography className={inter.className} sx={{
                display: {
                  xl: "block",
                  lg: "block",
                  md: "block",
                  sm: "none",
                  xs: "none"
                }, color: "white", marginTop: 5, width: 1200, fontSize: 18, fontWeight: 100
              }} component="p">
                Fort du constat de l’accélération de la dégradation des ressources naturelles, des écosystèmes forestiers et des sols,
                l’ONG APROFONB a été créée par un groupe d’experts afin de contribuer à sauvegarde des forêts naturelles, au reboisement,
                à la reforestation, et à la restauration des sols dégradés sur toute l’étendue du territoire national. Dans ce sens,
                l’ONG collabore étroitement avec la Direction Générale des Eaux, Forêts et Chasse, et toutes les institutions ayant les mêmes objectifs ou but.

              </Typography>
              <Typography className={inter.className} sx={{
                display: {
                  xl: "none",
                  lg: "none",
                  md: "none",
                  sm: "block",
                  xs: "block",
                }, color: "white", marginTop: 3, width: 400, fontSize: 12, fontWeight: 100,
              }} component="p">
                Fort du constat de l’accélération de la dégradation des ressources naturelles, des écosystèmes forestiers et des sols,
                l’ONG APROFONB a été créée par un groupe d’experts afin de contribuer à sauvegarde des forêts naturelles, au reboisement,
                à la reforestation, et à la restauration des sols dégradés sur toute l’étendue du territoire national. Dans ce sens,
                l’ONG collabore étroitement avec la Direction Générale des Eaux, Forêts et Chasse, et toutes les institutions ayant les mêmes objectifs ou but.

              </Typography>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Typography className={inter.className} sx={{ display: "flex", flexGrow: 1, justifyContent: "center", marginTop: 5, color: '#00B27F', }} variant="h4" component="h4">
          But et Objectif
        </Typography>
      </Box>
      <Box sx={{
        flexGrow: 1, marginTop: 5, marginLeft: { xs: 3, sm: 3, md: 0, lg: 0, xl: 0 },
        marginRight: { xs: 3, sm: 3, md: 0, lg: 0, xl: 0 }
      }}
      >
        <Grid container spacing={{ xs: 2, sm: 2, md: 20, lg: 20, xl: 20 }} sx={{ justifyContent: "center", }}>
          <Grid xl={5} item xs={12} lg={5} md={5} sm={12}>
            <Box sx={{
              background: "#00B27F", display: "flex", justifyContent: "center", borderRadius: 2,
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
            }}>
              <Typography component="h5" variant="h5" sx={{ color: "white" }}>Objectifs assignés</Typography>
            </Box>
            <Box sx={{
              background: "white", display: "flex", justifyContent: "center", marginTop: 2,
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", flexDirection: 'column'
            }}>
              <Typography component="p" sx={{ color: "gray", alignSelf: "center", marginTop: 2 }}>
                De façon spécifique, les objectifs assignés à l’ONG sont :
              </Typography>
              <List dense={true}>
                <ListItem>
                  <ListItemIcon>
                    <DoneIcon sx={{ color: "#00B27F" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="La pérennisation des acquis des projets et institutions œuvrant dans le sens du développement forestier au Bénin ;"
                  />
                </ListItem>
              </List>
              <List dense={true}>
                <ListItem>
                  <ListItemIcon>
                    <DoneIcon sx={{ color: "#00B27F" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="L’appui à la décentralisation à travers la conception, la rédaction de micro-projets 
                    bancables dans le domaine de la gestion des ressources naturelles et de la protection de l’environnement ;"
                  />
                </ListItem>
              </List>
              <List dense={true}>
                <ListItem>
                  <ListItemIcon>
                    <DoneIcon sx={{ color: "#00B27F" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="La recherche de financement pour la réalisation des projets ;"
                  />
                </ListItem>
              </List>
              <List dense={true}>
                <ListItem>
                  <ListItemIcon>
                    <DoneIcon sx={{ color: "#00B27F" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="La formation des riverains à la gestion rationnelle des ressources naturelles ;"
                  />
                </ListItem>
              </List>
              <List dense={true}>
                <ListItem>
                  <ListItemIcon>
                    <DoneIcon sx={{ color: "#00B27F" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Le développement de l’esprit d’initiative à la base."
                  />
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item xl={5} xs={12} lg={5} md={5} sm={12} >
            <Box sx={{ background: "white", display: "flex", justifyContent: "center", borderRadius: 2, boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" }}>
              <Typography component="h5" variant="h5" sx={{ color: "#00B27F" }}>Objectifs assignés</Typography>
            </Box>
            <Box sx={{
              background: "#00B27F", display: "flex", justifyContent: "center", marginTop: 2,
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", flexDirection: 'column'
            }}>
              <Typography component="p" sx={{ color: "white", alignSelf: "center", marginTop: 2 }}>
                De façon spécifique, les objectifs assignés à l’ONG sont :
              </Typography>
              <List dense={true}>
                <ListItem>
                  <ListItemIcon>
                    <DoneIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText sx={{ color: "white" }}
                    primary="La pérennisation des acquis des projets et institutions œuvrant dans le sens du développement forestier au Bénin ;"
                  />
                </ListItem>
              </List>
              <List dense={true}>
                <ListItem>
                  <ListItemIcon>
                    <DoneIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ color: "white" }}
                    primary="L’appui à la décentralisation à travers la conception, la rédaction de micro-projets 
                    bancables dans le domaine de la gestion des ressources naturelles et de la protection de l’environnement ;"
                  />
                </ListItem>
              </List>
              <List dense={true}>
                <ListItem>
                  <ListItemIcon>
                    <DoneIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ color: "white" }}
                    primary="La recherche de financement pour la réalisation des projets ;"
                  />
                </ListItem>
              </List>
              <List dense={true}>
                <ListItem>
                  <ListItemIcon>
                    <DoneIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ color: "white" }}
                    primary="La formation des riverains à la gestion rationnelle des ressources naturelles ;"
                  />
                </ListItem>
              </List>
              <List dense={true}>
                <ListItem>
                  <ListItemIcon>
                    <DoneIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ color: "white" }}
                    primary="Le développement de l’esprit d’initiative à la base."
                  />
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
        <Box id="rapports" sx={{ flexGrow: 1 }}>
          <Typography className={inter.className} sx={{
            display: "flex",
            flexGrow: 1,
            marginTop: 5,
            color: '#00B27F',
            marginLeft: 20
          }} variant="h4" component="h4">
            Nos rapports
          </Typography>

          <Swiper
            // slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
              type: "bullets"
            }}
            centeredSlides={true}
            slidesPerView={'auto'}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              900: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"

          >
            <SwiperSlide>
              <Box sx={{
                background: "white", display: "flex", justifyContent: "center", marginTop: 2,
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", flexDirection: 'column', borderRadius: 3, height: 200
              }}>
                <img src="/presentation_village_kikele.png" style={{ height: "100%", width: "100%", objectFit: "cover", borderRadius: 3, }} alt="" />
              </Box>
              <Box sx={{
                background: "white", display: "flex", justifyContent: "center", marginTop: 1,
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                marginBottom: 10,
                borderRadius: 1,
                flexGrow: 1,
              }}>
                <Typography className={inter.className} sx={{
                  color: '#00B27F',

                }} component="span">
                  Presentation du village de kikélé
                </Typography>
              </Box>
            </SwiperSlide>

            <SwiperSlide>
              <Box sx={{
                background: "white", display: "flex", justifyContent: "center", marginTop: 2,
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", flexDirection: 'column', borderRadius: 3, height: 200
              }}>
                <img src="/rapport_activite.png" style={{ height: "100%", width: "100%", objectFit: "cover", borderRadius: 3, }} alt="" />
              </Box>
              <Box sx={{
                background: "white", display: "flex", justifyContent: "center", marginTop: 1,
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                marginBottom: 10,
                borderRadius: 1,
                flexGrow: 1,
              }}>
                <Typography className={inter.className} sx={{
                  color: '#00B27F',

                }} component="span">
                  Rapport de nos activitées
                </Typography>

              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box sx={{
                background: "white", display: "flex", justifyContent: "center", marginTop: 2,
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", flexDirection: 'column', borderRadius: 3, height: 200
              }}>
                <img src="/rapport_ikele_mai_juillet_2001.png" style={{ height: "100%", width: "100%", objectFit: "cover", borderRadius: 3, }} alt="" />
              </Box>
              <Box sx={{
                background: "white", display: "flex", justifyContent: "center", marginTop: 1,
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                marginBottom: 10,
                borderRadius: 1,
                flexGrow: 1,
              }}>
                <Typography className={inter.className} sx={{
                  color: '#00B27F',

                }} component="span">
                  Rapport Mai-juillet 2001
                </Typography>

              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box sx={{
                background: "white", display: "flex", justifyContent: "center", marginTop: 2,
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", flexDirection: 'column', borderRadius: 3, height: 200
              }}>
                <img src="/rapport_final_ikele.png" style={{ height: "100%", width: "100%", objectFit: "cover", borderRadius: 3, }} alt="" />
              </Box>
              <Box sx={{
                background: "white", display: "flex", justifyContent: "center", marginTop: 1,
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                marginBottom: 10,
                borderRadius: 1,
                flexGrow: 1,
              }}>
                <Typography className={inter.className} sx={{
                  color: '#00B27F',

                }} component="span">
                  Rapport final
                </Typography>

              </Box>
            </SwiperSlide>


          </Swiper>


        </Box>
      </Box>
      <Box id="ressources_et_informations" sx={{ flexGrow: 1, background: "#00B27F", display: "flex", justifyContent: "center", height: 150, alignItems: "center", marginTop: 5 }}>
        <Typography className={inter.className} sx={{ display: "flex", flexGrow: 1, justifyContent: "center", color: 'white', }} variant="h4" component="h4">
          Ressources et Informations
        </Typography>
      </Box>
      <Swiper autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }} loop={true}
        style={{ height: "100%", width: "100%", }}
        pagination={pagination}
        modules={[Pagination, Autoplay]}
        centeredSlides={true}
        className="mySwiper">
        <SwiperSlide>
          <Box sx={{
            display: "flex",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
            borderRadius: 3, marginBottom: 10, margin: { xs: "20px 5% 0 5%", sm: "20px 5% 0 5%", md: "20px 5% 0 5%", lg: "20px 15% 0 15%", xl: "20px 15% 0 15%", }
          }}>
            <Grid container spacing={{ xs: 2, sm: 0, md: 0, lg: 0, xl: 0 }} sx={{ height: { xs: 600, sm: 600, md: 400, lg: 400, xl: 400, } }}  >
              <Grid xl={5} item xs={12} lg={5} md={5} sm={12} sx={{ height: { xs: 300, sm: 300, md: "100%", lg: "100%", xl: "100%", } }} >
                <img src="/atacora.jpeg" style={{ height: "100%", width: "100%", }} alt="" />
              </Grid>
              <Grid item xl={7} xs={12} lg={7} md={7} sm={12} style={{ flexGrow: 1, justifyContent: "center", display: "flex", overflow: "scroll", height: "100%" }} >
                <Box>
                  <Typography variant="h6" component="h6" sx={{ color: "#00B27F", alignSelf: "center", margin: 2, width: "95%" }}>
                    Expériences dans l’Atacora (Bassins versants de la Pendjari et de la Mékrou)
                  </Typography>
                  <Typography component="p" sx={{ color: "gray", alignSelf: "center", margin: 2, width: "95%" }}>
                    L’ONG a principalement accompagné les partenaires à base (femmes et jeunes) dans la restauration des paysages te des forêts et dans le développement des chaînes de valeur des produits miel, karité, néré, lait de vache, soja, arachide.
                    En ce qui concerne la restauration des paysages et des forêts, L’ONG a organisé des séances de sensibilisation et formé les jeunes pour l’adoption des pratiques culturales résilientes aux changements climatiques à savoir :
                  </Typography>
                  <List dense={true}>
                    <ListItem>
                      <ListItemIcon>
                        <DoneIcon sx={{ color: "#00B27F" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary="Utilisation des semences à cycle court"
                      />
                    </ListItem>
                  </List>
                  <List dense={true}>
                    <ListItem>
                      <ListItemIcon>
                        <DoneIcon sx={{ color: "#00B27F" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary="Gestion des eaux de surface à travers des cordons pierreux et des demi – lunes et autres dispositifs de lutte contre l’érosion                    "
                      />
                    </ListItem>
                  </List>
                  <List dense={true}>
                    <ListItem>
                      <ListItemIcon>
                        <DoneIcon sx={{ color: "#00B27F" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary="Fertilisation des sols à travers l’installation des plantes améliorantes de la fertilité"
                      />
                    </ListItem>
                  </List>
                  <List dense={true}>
                    <ListItem>
                      <ListItemIcon>
                        <DoneIcon sx={{ color: "#00B27F" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary="Utilisation des déjections des animaux dans les champs après la récolte
                        "
                      />
                    </ListItem>
                  </List>
                  <List dense={true}>
                    <ListItem>
                      <ListItemIcon>
                        <DoneIcon sx={{ color: "#00B27F" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary="Fabrication du compost
                        "
                      />
                    </ListItem>
                  </List>
                  <List dense={true}>
                    <ListItem>
                      <ListItemIcon>
                        <DoneIcon sx={{ color: "#00B27F" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary="Pratique de l’Agroforesterie
                        "
                      />
                    </ListItem>
                  </List>
                  <List dense={true}>
                    <ListItem>
                      <ListItemIcon>
                        <DoneIcon sx={{ color: "#00B27F" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary="Association et rotation de cultures"
                      />
                    </ListItem>
                  </List>
                  <List dense={true}>
                    <ListItem>
                      <ListItemIcon>
                        <DoneIcon sx={{ color: "#00B27F" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary="Jachères améliorées"
                      />
                    </ListItem>
                  </List>
                  <List dense={true}>
                    <ListItem>
                      <ListItemIcon>
                        <DoneIcon sx={{ color: "#00B27F" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary="Reboisement à travers l’installation des plants forestiers, fruitiers et fourragers ligneux sur les zones dégradées"
                      />
                    </ListItem>
                  </List>
                  <List dense={true}>
                    <ListItem>
                      <ListItemIcon>
                        <DoneIcon sx={{ color: "#00B27F" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary="Mis en défens des forêts"
                      />
                    </ListItem>
                  </List>
                  <List dense={true}>
                    <ListItem>
                      <ListItemIcon>
                        <DoneIcon sx={{ color: "#00B27F" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary="Régénération assistée des forêts dégradées"
                      />
                    </ListItem>
                  </List>
                  <List dense={true}>
                    <ListItem>
                      <ListItemIcon>
                        <DoneIcon sx={{ color: "#00B27F" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary="Aménagement des aires de pâturages à travers l’installation des espèces fourragères (Andropogon gayanus)"
                      />
                    </ListItem>
                  </List>
                  <List dense={true}>
                    <ListItem>
                      <ListItemIcon>
                        <DoneIcon sx={{ color: "#00B27F" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary="Identification, délimitation et sécurisation des couloirs de passage"
                      />
                    </ListItem>
                  </List>
                  <List dense={true}>
                    <ListItem>
                      <ListItemIcon>
                        <DoneIcon sx={{ color: "#00B27F" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary="Entretien des retenues et points d’eau"
                      />
                    </ListItem>
                  </List>
                  <Typography component="p" sx={{ color: "gray", alignSelf: "center", margin: 2, width: "95%" }}>
                    En ce qui concerne le développement les chaînes de valeur, ce sont surtout les femmes
                    qui sont formées et encadrées pour la collecte, la transformation et la commercialisation des produits de ruches,
                    du karité, du néré, du soja et de l’arachide, le lait de vache. Elles sont également appuyées dans
                    les activités de maraîchage et de production de plants autour des points d’eau.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{
            display: "flex",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
            borderRadius: 3, marginBottom: 10, margin: { xs: "20px 5% 0 5%", sm: "20px 5% 0 5%", md: "20px 5% 0 5%", lg: "20px 15% 0 15%", xl: "20px 15% 0 15%", }
          }}>
            <Grid container spacing={{ xs: 2, sm: 0, md: 0, lg: 0, xl: 0 }} sx={{ height: { xs: 600, sm: 600, md: 400, lg: 400, xl: 400, } }}  >
              <Grid xl={5} item xs={12} lg={5} md={5} sm={12} sx={{ height: { xs: 300, sm: 300, md: "100%", lg: "100%", xl: "100%", } }} >
                <img src="/zou.png" style={{ height: "100%", width: "100%", }} alt="" />
              </Grid>
              <Grid item xl={7} xs={12} lg={7} md={7} sm={12} style={{ flexGrow: 1, justifyContent: "center", display: "flex", overflow: "scroll", height: "100%" }} >
                <Box>
                  <Typography variant="h6" component="h6" sx={{ color: "#00B27F", alignSelf: "center", margin: 2, width: "95%" }}>
                    Expériences dans le département du Zou
                  </Typography>
                  <Typography component="p" sx={{ color: "gray", alignSelf: "center", margin: 2, width: "95%" }}>
                    Dans ce département, l’ONG a accompagné les groupements de femmes dans la promotion des activités génératrices de revenus à travers l’appui à la rédaction de plans d’affaires, la recherche de financement,
                    la gestion financière et comptable au sein des organisations. Les activités génératrices menées par les groupements sont diverses à savoir :
                  </Typography>
                  <List dense={true}>
                    <ListItem>
                      <ListItemIcon>
                        <DoneIcon sx={{ color: "#00B27F" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary="Transformation des noix de palme"
                      />
                    </ListItem>
                  </List>
                  <List dense={true}>
                    <ListItem>
                      <ListItemIcon>
                        <DoneIcon sx={{ color: "#00B27F" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary="Fabrication du savon"
                      />
                    </ListItem>
                  </List>
                  <List dense={true}>
                    <ListItem>
                      <ListItemIcon>
                        <DoneIcon sx={{ color: "#00B27F" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary="Agriculture"
                      />
                    </ListItem>
                  </List>
                  <List dense={true}>
                    <ListItem>
                      <ListItemIcon>
                        <DoneIcon sx={{ color: "#00B27F" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary="Pisciculture"
                      />
                    </ListItem>
                  </List>
                  <List dense={true}>
                    <ListItem>
                      <ListItemIcon>
                        <DoneIcon sx={{ color: "#00B27F" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary="Maraîchage"
                      />
                    </ListItem>
                  </List>
                  <List dense={true}>
                    <ListItem>
                      <ListItemIcon>
                        <DoneIcon sx={{ color: "#00B27F" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary="Achat, stockage et vente"
                      />
                    </ListItem>
                  </List>
                  <List dense={true}>
                    <ListItem>
                      <ListItemIcon>
                        <DoneIcon sx={{ color: "#00B27F" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary="Fabrication de gari (Transformation du manioc)"
                      />
                    </ListItem>
                  </List>
                  <List dense={true}>
                    <ListItem>
                      <ListItemIcon>
                        <DoneIcon sx={{ color: "#00B27F" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary="Production de plants"
                      />
                    </ListItem>
                  </List>
                  <List dense={true}>
                    <ListItem>
                      <ListItemIcon>
                        <DoneIcon sx={{ color: "#00B27F" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary="Reboisement"
                      />
                    </ListItem>
                  </List>
                  <List dense={true}>
                    <ListItem>
                      <ListItemIcon>
                        <DoneIcon sx={{ color: "#00B27F" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary="Mis en défens des forêts"
                      />
                    </ListItem>
                  </List>
                  <List dense={true}>
                    <ListItem>
                      <ListItemIcon>
                        <DoneIcon sx={{ color: "#00B27F" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary="Régénération assistée des forêts dégradées"
                      />
                    </ListItem>
                  </List>

                  <Typography component="p" sx={{ color: "gray", alignSelf: "center", margin: 2, width: "95%" }}>
                    Les femmes sont aussi sensibilisées à l’usage des foyers améliorés moins consommateurs en bois de chauffage.
                    En outre, avec l’appui de la FAO, l’ONG a appuyé le gouvernement du Bénin, dans l’élaboration de sa politique forestière et conduit plusieurs recherches développement sur les pratiques, les techniques et technologies résilientes
                    aux changements climatiques pour atténuer leurs effets néfastes sur les couches vulnérables que sont les femmes et les jeunes.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{
            display: "flex",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
            borderRadius: 3, marginBottom: 10, margin: { xs: "20px 5% 0 5%", sm: "20px 5% 0 5%", md: "20px 5% 0 5%", lg: "20px 15% 0 15%", xl: "20px 15% 0 15%", }
          }}>
            <Grid container spacing={{ xs: 2, sm: 0, md: 0, lg: 0, xl: 0 }} sx={{ height: { xs: "auto", sm: "auto", md: 400, lg: 400, xl: 400, } }}  >
              <Grid xl={5} item xs={12} lg={5} md={5} sm={12} sx={{ height: { xs: 300, sm: 300, md: "100%", lg: "100%", xl: "100%", } }} >
                <img src="/c_1.jpg" style={{ height: "100%", width: "100%", }} alt="" />
              </Grid>
              <Grid item xl={7} xs={12} lg={7} md={7} sm={12} style={{ flexGrow: 1, justifyContent: "center", display: "flex", overflow: "scroll", height: "100%" }} >
                <Box>
                  <Typography variant="h6" component="h6" sx={{ color: "#00B27F", alignSelf: "center", margin: 2, width: "95%" }}>
                    Expériences dans la Donga
                  </Typography>
                  <Typography component="p" sx={{ color: "gray", alignSelf: "center", margin: 2, width: "95%" }}>
                    L’ONG a donné son appui aux communautés à la base et aux collectivités locales pour l’aménagement des forêts individuelles, communautaires, communales et sacrées à travers la protection contre les feux, le pâturage excessif, la carbonisation anarchique, l’exploitation anarchique et l’installation des ruches pour l’exploitation des produits de la ruche.
                    Les activités de l’ONG ont contribué à une meilleure protection des ressources naturelles de ce département qui est le plus boisé du Bénin.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{
            display: "flex",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
            borderRadius: 3, marginBottom: 10, margin: { xs: "20px 5% 0 5%", sm: "20px 5% 0 5%", md: "20px 5% 0 5%", lg: "20px 15% 0 15%", xl: "20px 15% 0 15%", }
          }}>
            <Grid container spacing={{ xs: 2, sm: 0, md: 0, lg: 0, xl: 0 }} sx={{ height: { xs: "auto", sm: "auto", md: 400, lg: 400, xl: 400, } }}  >
              <Grid xl={5} item xs={12} lg={5} md={5} sm={12} sx={{ height: { xs: 300, sm: 300, md: "100%", lg: "100%", xl: "100%", } }} >
                <img src="/bass.jpg" style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
              </Grid>
              <Grid item xl={7} xs={12} lg={7} md={7} sm={12} style={{ flexGrow: 1, justifyContent: "center", display: "flex", overflow: "scroll", height: "100%" }} >
                <Box>
                  <Typography variant="h6" component="h6" sx={{ color: "#00B27F", alignSelf: "center", margin: 2, width: "95%" }}>
                    Expériences dans le Borgou et l’Alibori (Bassin versant du Niger)
                  </Typography>
                  <Typography component="p" sx={{ color: "gray", alignSelf: "center", margin: 2, width: "95%" }}>
                    Avec l’appui de la banque mondiale, l’ONG a appuyé l’Etat béninois, dans l’élaboration et la mise en œuvre de plans d’aménagement des forêts classées à travers la réalisation de plantations à grande échelle en vue de protéger
                    le bassin versant du Niger contre les effets néfastes des changements climatiques à travers la restauration des zones fortement dégradées.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{
            display: "flex",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
            borderRadius: 3, marginBottom: 10, margin: { xs: "20px 5% 0 5%", sm: "20px 5% 0 5%", md: "20px 5% 0 5%", lg: "20px 15% 0 15%", xl: "20px 15% 0 15%", }
          }}>
            <Grid container spacing={{ xs: 2, sm: 0, md: 0, lg: 0, xl: 0 }} sx={{ height: { xs: "auto", sm: "auto", md: 400, lg: 400, xl: 400, } }}  >
              <Grid xl={5} item xs={12} lg={5} md={5} sm={12} sx={{ height: { xs: 300, sm: 300, md: "100%", lg: "100%", xl: "100%", } }} >
                <img src="/colline.jpeg" style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
              </Grid>
              <Grid item xl={7} xs={12} lg={7} md={7} sm={12} style={{ flexGrow: 1, justifyContent: "center", display: "flex", overflow: "scroll", height: "100%" }} >
                <Box>
                  <Typography variant="h6" component="h6" sx={{ color: "#00B27F", alignSelf: "center", margin: 2, width: "95%" }}>
                    Expériences dans le département des Collines
                  </Typography>
                  <Typography component="p" sx={{ color: "gray", alignSelf: "center", margin: 2, width: "95%" }}>
                    Avec l’appui de la coopération française (Association Française pour le développement), l’ONG a appuyé toutes les Communes des Collines à aménager les forêts communales
                    (sensibilisation des riverains aux forêts, élaboration des plans d’aménagement, formation aux techniques de production de plants et à la mise en place des plantations)
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </SwiperSlide>
      </Swiper>
      <Box id="nos_partenaires" sx={{ flexGrow: 1, marginTop: 5 }}>
        <Typography className={inter.className} sx={{
          display: "flex",
          flexGrow: 1,
          marginTop: 5,
          color: '#00B27F',
          marginLeft: { md: 5, lg: 20, xs: 5 }
        }} variant="h4" component="h4">
          Nos Partenaires
        </Typography>
      </Box>
      <Grid container spacing={0} sx={{ justifyContent: "center", marginBottom: 10, marginTop: 5 }}>
        <Grid item alignItems="center" xl={1} xs={2} >
          <Box sx={{ height: 70, width: "100%" }}>
            <img src="/afd.png" style={{ height: "100%", width: "100%", objectFit: "contain", borderRadius: 3, }} alt="" />
          </Box>
        </Grid>
        <Grid item alignItems="center" xl={1} xs={1} >
          <Box sx={{ height: 70, width: "100%" }}>
            <img src="/iucn.png" style={{ height: "100%", width: "100%", objectFit: "contain", borderRadius: 3, }} alt="" />
          </Box>
        </Grid>
        <Grid item alignItems="center" xl={1} xs={1} >
          <Box sx={{ height: 70, width: "100%" }}>
            <img src="/bank.png" style={{ height: "100%", width: "100%", objectFit: "contain", borderRadius: 3, }} alt="" />
          </Box>
        </Grid>
        <Grid item alignItems="center" xl={1} xs={1} >
          <Box sx={{ height: 70, width: "100%" }}>
            <img src="/fao.png" style={{ height: "100%", width: "100%", objectFit: "contain", borderRadius: 3, }} alt="" />
          </Box>
        </Grid>
        <Grid item alignItems="center" xl={1} xs={1} >
          <Box sx={{ height: 70, width: "100%" }}>
            <img src="/logo_sona.jpeg" style={{ height: "100%", width: "100%", objectFit: "contain", borderRadius: 3, }} alt="" />
          </Box>
        </Grid>
        <Grid item alignItems="center" xl={1} xs={1} >
          <Box sx={{ height: 70, width: "100%" }}>
            <img src="/coformo.png" style={{ height: "100%", width: "100%", objectFit: "contain", borderRadius: 3, }} alt="" />
          </Box>
        </Grid>
      </Grid>
      <Box id="contact"  sx={{ flexGrow: 1, marginTop: 5, marginBottom: 10, }}>
        <Typography className={inter.className} sx={{
          display: "flex",
          flexGrow: 1,
          color: '#00B27F',
          alignSelf: "center",
          justifyContent: "center"
        }} variant="h4" component="h4">
          Contact
        </Typography>
        <Box sx={{
          display: "flex",
          flexGrow: 1,
          alignSelf: "center",
          justifyContent: "center",
          marginTop: 2
        }} >
          <Box>
            <Typography style={{ marginTop: 1 }} className={inter.className} component="p">
              <strong>Adresse postale :</strong> <span style={{ color: "gray" }}>BP 014 Womè, Togoudo - Godomey, Bénin</span>
            </Typography>
            <Typography style={{ marginTop: 5 }} className={inter.className} component="p">
              <strong>Tél.</strong> <span style={{ color: "gray" }}>(229) 95 50 91 04 </span>
            </Typography>
            <Typography style={{ marginTop: 5 }} className={inter.className} component="p">
              <strong>Email</strong> <span style={{ color: "gray" }}>djodjou@yahoo.fr</span>
            </Typography>
            <Typography style={{ marginTop: 5 }} className={inter.className} component="p">
              <strong>Siège</strong> <span style={{ color: "gray" }}>Bohicon</span>
            </Typography>
          </Box>

        </Box>


      </Box>
    </>
  )
}
