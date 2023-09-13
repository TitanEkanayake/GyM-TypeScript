import { SelectedPage,ClassType } from '@/shared/types'
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import Class from './Class';

const classes: Array<ClassType> = [
    {
        name : "Weight Training Classes",
        description:"Join our invigorating weight training classes at the gym to take your fitness journey to the next level. Our expert trainers will guide you through tailored workouts designed to build strength, tone muscles, and improve overall fitness. Whether you're a beginner looking to learn the basics or an experienced lifter aiming to refine your technique, our classes cater to all levels.",
        image: image1,
    },
    {
        name: "Yoga Classes",
        image: image2,
      },
      {
        name: "Ab Core Classes",
        description:
          "Ab core classes at the gym are a fantastic way to target and strengthen your core muscles. These classes typically focus on a variety of exercises designed to tone your abdominal muscles, improve stability, and enhance overall core strength. ",
        image: image3,
      },
      {
        name: "Adventure Classes",
        description:
          "Adventure Classes at our gym offer a dynamic and exhilarating way to stay fit while breaking away from the routine. These classes are designed to inject an element of excitement into your fitness journey, combining challenging workouts with elements of adventure.",
        image: image4,
      },
      {
        name: "Fitness Classes",
        description:
          "Fitness classes at the gym offer a fantastic way to stay motivated and achieve your health and wellness goals. Whether you're into high-intensity interval training, yoga, spinning, or dance, there's a class for everyone. ",
        image: image5,
      },
      {
        name: "Training Classes",
        description:
          "Training classes at the gym offer a dynamic and motivating way to achieve your fitness goals. Whether you're a beginner looking to learn the fundamentals or a seasoned gym-goer seeking to diversify your workout routine, these classes provide expert guidance and a supportive community.",
        image: image6,
      },
];
type Props = {
    setSelectedPage:(value:SelectedPage) => void;
}

const OurClasees = ({setSelectedPage}: Props) => {
  return (
    <section id ="ourclasses" className='w-full bg-primary-100 py-40'>
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
            className='mx-auto w-5/6'
            initial="hidden" 
            whileInView='visible' 
            viewport={{once: true,amount:0.5}} 
            transition={{duration:0.5}}
            variants={{
                hidden:{opacity:0,x:-50},
                visible:{opacity:1,x:0},
            }}>
                <div className="md:w-3/5">
                    <HText>OUR CLASSES</HText>
                    <p className='py-5'>
                    At our gym, we offer a diverse range of classes designed to cater to every fitness level and goal. Whether you're looking to build strength, improve flexibility, or simply stay active and healthy, our classes have you covered. From high-intensity interval training (HIIT) to relaxing yoga sessions, our experienced instructors are here to guide and motivate you on your fitness journey. Join our classes to not only achieve your fitness goals but also become part of a supportive and energetic community that is committed to helping you lead a healthier, happier life.
                    </p>
                </div>
            </motion.div>
            <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                <ul className='w-[2800px] whitespace-nowrap'>
                    {classes.map((item: ClassType,index) => (
                        <Class 
                        key = {`${item.name}-${index}`}
                        name={item.name}
                        description={item.description}
                        image={item.image}
                        />

                    ))}
                </ul>

            </div>
        </motion.div>
    </section>
  )
}

export default OurClasees