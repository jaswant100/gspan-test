import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import face1 from '@/../public/images/face1.jpg'
import face2 from '@/../public/images/face2.jpg'
import face3 from '@/../public/images/face3.jpg'
import Btn from '@/../public/images/btn.jpg'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  let rows: any = Array(3).fill([])
  let Obj = {
    "id": 1,
    "image": "face.jpg",
    "name": "Jean Doe",
    "designation": "User Experence Designer",
    "description": "Jean is a experenced designer, specialized in system design components"
  }
  rows = rows.map((element: any, i: number) => {
    switch (i) {
      case 0:
        let ar: any = []
        for (let ii = 0; ii < 2; ii++) {
          ar = [...ar, { ...Obj, id: "0" + ii, image: '0' }]
        }
        return [...element, ...ar];
      case 1:
        let ar1: any = []
        for (let ii = 0; ii < 3; ii++) {
          ar1 = [...ar1, { ...Obj, id: "1" + ii, image: '1' }]
        }
        return [...element, ...ar1];
      case 2:
        let ar2: any = []
        for (let ii = 0; ii < 4; ii++) {
          ar2 = [...ar2, { ...Obj, id: "2" + ii, image: '2' }]
        }
        return [...element, ...ar2];
    }

  });
  return (
    <>
      <Head key={2}>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          {
            rows && rows.map((data: any, index: number) => {
              let a = `sub_grid_${index + 1}`
              return (
                <div className={a} key={index}>
                  {
                    data && data.map((d: any) => {
                      return (
                        <div className={styles.grid_item} key={d.id}>
                          <Image src={d.image === "0" ? face1 : d.image === "1" ? face2 : face3} title="face" alt="face" />
                          <div className={styles.sub_grid}>
                            <h4>{d.name}</h4>
                            <h5>{d.designation}</h5>
                          </div>
                          <a href={"/0"}><Image src={Btn} title="Icon Button" alt="face" /></a>
                          <p>{d.description}</p>
                        </div>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </div>
      </main>
    </>
  )
}
