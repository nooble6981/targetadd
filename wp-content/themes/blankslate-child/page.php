<?php get_header(); ?>
<section id="content" role="main">
	<div class="container">
	<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
		<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
			<h1 class="entry-title"><?php the_title(); ?></h1>
			<div class="heading-border"></div>
			<section class="entry-content">
			<?php if ( has_post_thumbnail() ) { the_post_thumbnail(); } ?>
			<?php the_content(); ?>
			</section>
		</article>
	<?php endwhile; endif; ?>
	</div>
</section>
<?php get_footer(); ?>