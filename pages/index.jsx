import React, { useEffect, useState } from "react";
import Body from "/components/Body.tsx";
import Skeleton from "react-loading-skeleton";

import SiteTransitions from "../components/SiteTransitions";
import BlogPanel from "../components/BlogDesign01";
import BlogPanel02 from "../components/BlogDesign02";

// Home Page Information
export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => { setTimeout(() => { setLoading(false);}, 2000);});

  const loadingdisplay = (
    // Loading Display Constant
    <Body title="Projects">
      <h1 className="font-extrabold text-6xl tracking-tight">
        {loading ? <Skeleton width={200} /> : "Projects"}
      </h1>

      <div className="mt-[20px]"></div>

      <Skeleton baseColor="#202020" width="100px" highlightColor="#666" />
      <div className="mt-[40px]"></div>
      <Skeleton baseColor="#202020" height="42px" className="rounded-lg" highlightColor="#666" />

      <div className="mt-10">
        <Skeleton height="122px" count={3} className="w-full my-2 rounded-lg" baseColor="#202020" borderRadius="10px" highlightColor="#666" />
      </div>
    </Body>
  );

  return (
    // MAIN PAGE LOADING SUBPAGES
    <main>
      <SiteTransitions />

      {/* MAIN PAGE ARTWORK */}
      <div className="relative">

        <div className="mt-5 md:mt-[-0vh] grid grid-cols-1 md:grid-cols-2">

          {loading ? <> {loadingdisplay} </> : <BlogPanel 
            img="/1.webp" 
            date="May 10 - 2 min read"
            topic="Un inicio, un concepto"
            content="Desde pequeño me encanto el mundo de la tecnología y sobre todo un apartado en específico, la programación, en mis ojos este
            era el rubro más interesante que podía existir, para mí es y siempre será una las cosas que nunca me arrepentiré de haber intentado hace
            cuatro años y no haberme rendido durante el proceso de aprender."
          />}

        {loading ? <> {loadingdisplay} </> : <BlogPanel 
            img="/2.webp" 
            date="May 12 - 3 min read"
            topic="Tiempo, perseverancia"
            content="Lograr algo lleva esfuerzo, durante el tiempo que aprendí a programar y dedicarme a estudiar esto como algo más que solo un
            pasatiempo que aveces hacia y entrar a un mundo profesional lo cual no era sencillo, fue práctica y error, muchas veces las cuales
            no logre lo que realmente quería."
          />}

        {loading ? <> {loadingdisplay} </> : <BlogPanel 
            img="/3.webp" 
            date="May 13 - 5 min read"
            topic="Nada es perfecto"
            content="Apesar de tantos problemas y dudas existenciales que alguna vez me hice, 'Puedo hacerlo?', el progreso era más grande y 
            se notaba mi aumento de experiencia en cada pequeño projecto que hacía durante mi carrera como programador, aprendiendo aún nuevos
            conceptos y seguir avanzando hasta donde pueda."
          />}

        {loading ? <> {loadingdisplay} </> : <BlogPanel 
            img="/4.webp" 
            date="May 14 - 1 min read"
            topic="Un camino el cual seguir"
            content="Luego de tantos años de aprender y seguir mejorándome, el amor por esto aún no se acaba, me hace feliz y realmente me apasiona
            esto, la cosa que más me encantaría de la vida seria pasar mi poco tiempo en este mundo haciendo lo que adoro y totalmente elegiría esto
            como lo cual haría por la eternidad."
          />}

        {loading ? <> {loadingdisplay} </> : <BlogPanel 
            img="/5.webp" 
            date="May 15 - 3 min read"
            topic="Oportunidades y esperanza"
            content="Regresando a tiempos de pandemia, el aprendizaje fue inmenso, incluso logre aprender otros campos de trabajo como la illustracion
            gráfica y aprender nuevos frameworks para programar aun mas cosas que tenía en mente y proyectos que he querido comenzar y terminar durante
            mi recorrido entre este sector."
          />}

        {loading ? <> {loadingdisplay} </> : <BlogPanel 
            img="/6.webp" 
            date="May 16 - 5 min read"
            topic="Lo inesperado del futuro"
            content="Actualmente incluso aprendí desarrollo de aplicaciones para computadoras, así mismo también con el deseo de finalizar este año teniendo
            conocimiento en el desarrollo de aplicaciones móviles de teléfonos, finalizar mis projectos actuales y avanzar hasta lograr graduarme como 
            ingeniero en este apartado tan maravilloso."
          />}

        {loading ? <> {loadingdisplay} </> : <BlogPanel02 
            img="/last.webp" 
            date="May 17 - 10 min read"
            topic="Inspira a los demas"
            content="Incluso cuando te sientas que no puedes, no te rindas, lucha por tus sueños y inspira a los demás por intentarlo así como tú lo
            haces, logra y triunfa, siente que has logrado algo, todo ha valido la pena y nunca dejaras que algo te haga decir'No puedo', porque tú puedes,
            cree en ti."
          />}

        </div>
      </div>
    </main>
  );
}
