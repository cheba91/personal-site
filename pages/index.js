import { Box, Container } from '@mui/material';
import ThemeToggler from '../components/ThemeToggler';
export default function HomePage({ changeTheme }) {
   return (
      <Container
         className="contentBox"
         sx={{
            zIndex: '2',
            maxWidth: '1200px',
            width: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
         }}
      >
         {/* Theme toggler */}
         <ThemeToggler changeTheme={changeTheme} />
         <Box>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            repudiandae molestiae amet autem aliquam! Dolores repudiandae
            eligendi praesentium labore quos nisi id saepe nemo. Ad ea culpa
            numquam iusto dolorum repudiandae corrupti voluptatibus velit
            dolores repellendus provident, laudantium in quibusdam temporibus
            pariatur quas nobis unde! Quod numquam sit minima nulla doloribus ut
            quidem et ipsam, inventore voluptate, optio suscipit non iusto,
            deleniti cum distinctio eos illo vero repudiandae veniam est esse?
            Maiores mollitia eveniet et nesciunt. Tenetur non dolorum odio
            quaerat, odit, animi qui repellendus debitis ut a autem eos ipsum
            fuga enim hic reprehenderit deleniti sequi soluta, maxime assumenda
            dolorem quidem nisi. Sed, tenetur ipsum quod ea nostrum, architecto,
            iste ex cumque atque totam voluptates hic? Vel esse, culpa sunt
            dolore ex harum? Rem, temporibus quo delectus placeat consectetur
            dolor voluptate in doloremque modi reiciendis velit voluptates
            quibusdam excepturi saepe esse a totam iste neque id enim molestiae
            pariatur magni! Facilis, assumenda, enim minima magni quibusdam
            dolorem dolore beatae exercitationem adipisci eveniet rerum quae
            atque ducimus. Cum odio excepturi corporis expedita suscipit est
            minus possimus laudantium? Enim dolore iusto fugiat similique
            recusandae assumenda nam facere explicabo ipsum? Hic voluptatibus
            ipsam amet quaerat similique officia dolor recusandae! Dolorem,
            accusamus unde.
         </Box>
      </Container>
   );
}
